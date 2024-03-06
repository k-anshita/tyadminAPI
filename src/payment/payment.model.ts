import { ApiProperty } from "@nestjs/swagger";

export class PaymentDetail {
    @ApiProperty()
    id: number;
    @ApiProperty()
    cardName: string;
    @ApiProperty()
    cardNumber: string;
    @ApiProperty()
    expMonth: number;
    @ApiProperty()
    expYear: number;
    @ApiProperty()
    cvv: string;
}