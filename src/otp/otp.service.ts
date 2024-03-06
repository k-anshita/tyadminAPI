import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Otp } from './otp.entity';
import { Repository } from 'typeorm';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';
import { OtpMailDetail } from './otp.model';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(Otp)
    private _OtpRepository: Repository<Otp>,
  ) {}

  async otp(model: OtpMailDetail): Promise<swagger_api_response> {
    if (model.email == null) {
      throw new Error('please fill email field');
    } else {
      await this._OtpRepository.save({
        email: model.email,
      });
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'Your email is registered.';
      return data;
    }
  }

  async getEmailDetail(): Promise<swagger_api_response> {
    const userData = await this._OtpRepository.find();
    if (userData) {
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'Email report is added!!';
      data.data = userData;
      return data;
    } else {
      throw new Error('Email does not exists');
    }
  }
}
