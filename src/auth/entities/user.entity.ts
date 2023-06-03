import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {

    // Lo coloca mongo
    // _id: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    name: string;

    @Prop({ minlegth:6, required: true })
    password: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: [String],  default: ['user']})
    roles: String[];
}

export const UserSchema = SchemaFactory.createForClass(User)
