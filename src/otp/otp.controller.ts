import { Body, Controller, Get, Post } from '@nestjs/common';
import { OtpMailDetail } from './otp.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('otp')
  async otp(@Body() model: OtpMailDetail): Promise<swagger_api_response> {
    return await this.otpService.otp(model);
  }

  @Get('mailHistory')
  getEmailDetail(): Promise<swagger_api_response> {
    return this.otpService.getEmailDetail();
  }
}
