import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private API: ApiService) {}

  async setcustomerId() {
    const temp: any = await this.getCustomers();
    if (temp.length > 0) {
      const code: string = temp[temp.length - 1]['customerId'].split('-')[1];
      const codeNum: number = parseInt(code);
      let newCodeNum: string = (codeNum + 1).toString();
      switch (newCodeNum.length) {
        case 1:
          newCodeNum = 'NH-000' + newCodeNum;
          break;
        case 2:
          newCodeNum = 'NH-00' + newCodeNum;
          break;
        case 3:
          newCodeNum = 'NH-0' + newCodeNum;
          break;

        default:
          newCodeNum = 'NH-' + newCodeNum;
          break;
      }
      return newCodeNum
    } else {
      return 'NH-0001';
    }
  }

  private getCustomers() {
    return new Promise((resolve) => {
      this.API.getCustomers().subscribe((res: any) => {
        resolve(res);
      });
    });
  }

}
