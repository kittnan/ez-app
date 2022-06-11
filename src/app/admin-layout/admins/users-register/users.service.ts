import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private API: ApiService) {}

  async setMemberId() {
    const temp: any = await this.getMembers();
    if (temp.length > 0) {
      const code: string = temp[temp.length - 1]['memberId'].split('-')[1];
      const codeNum: number = parseInt(code);
      let newCodeNum: string = (codeNum + 1).toString();
      switch (newCodeNum.length) {
        case 1:
          newCodeNum = 'NHM-000' + newCodeNum;
          break;
        case 2:
          newCodeNum = 'NHM-00' + newCodeNum;
          break;
        case 3:
          newCodeNum = 'NHM-0' + newCodeNum;
          break;

        default:
          newCodeNum = 'NHM-' + newCodeNum;
          break;
      }
      return newCodeNum
    } else {
      return 'NHM-0001';
    }
  }

  private getMembers() {
    return new Promise((resolve) => {
      this.API.getMembers().subscribe((res: any) => {
        resolve(res);
      });
    });
  }

}
