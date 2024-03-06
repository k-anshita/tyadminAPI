import { ApiProperty } from "@nestjs/swagger";

export class RegisterDetail {
    @ApiProperty()
    id: number;
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    // @ApiProperty()
    // conformPassword: string;
    @ApiProperty()
    gender: string;
    photo: string;
    @ApiProperty()
    date: string;
}

export class LoginDetail {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}