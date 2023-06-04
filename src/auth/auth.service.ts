import { async } from 'rxjs';
import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginDto, RegisterDto, UpdateAuthDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload } from './interfaces/jwt-payload';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './interfaces/login-response';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {

    try {

      const { password, ...userData } = createUserDto

      const newUser = new this.userModel({
        //Encriptar la contraseña
        password: bcryptjs.hashSync(password, 10),
        ...userData
      })

      //Guardar el Usuario
      await newUser.save()

      //Quitar la contraseña del usuario
      const { password: _, ...user } = newUser.toJSON()

      return user;

    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happen!!!')

    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.find()
  }

  async findUserById(id: string) {
    const user = await this.userModel.findById(id)

    const { password, ...rest } = user.toJSON()

    return rest;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async register(registerDto: RegisterDto): Promise<LoginResponse> {

    const user = await this.create(registerDto)

    return {
      user: user,
      token: this.getJwtToken({ id: user._id })
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {

    const { email, password } = loginDto

    const user = await this.userModel.findOne({ email: email })

    if (!user) {
      throw new UnauthorizedException('Not valid credentials - email')
    }

    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Not valid credentials - password')
    }

    const { password: _, ...rest } = user.toJSON()

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id })
    }
  }

  getJwtToken(payload: JwtPayload) {

    const token = this.jwtService.sign(payload)
    return token
  }

  async checkToken(email: string): Promise<LoginResponse> {

    const user = await this.userModel.findOne({ email: email })

    return {
      user: user,
      token: this.getJwtToken({ id: user.id })
    }
  }
}
