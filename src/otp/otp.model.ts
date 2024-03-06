import { ApiProperty } from "@nestjs/swagger";

export class OtpMailDetail {
    @ApiProperty()
    id: number;
    @ApiProperty()
    email:string;
}