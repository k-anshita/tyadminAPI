import { ApiProperty } from "@nestjs/swagger";

export class CardgamesDetail {
    @ApiProperty()
    message: string;
    @ApiProperty()
    userId: number;
}