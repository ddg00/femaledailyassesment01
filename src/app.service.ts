import {HttpService, Injectable} from '@nestjs/common';
// import * as fetch from 'node-fetch';
import {map} from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getFacebookFeeds() {
    const url = `https://graph.facebook.com/me/feed?limit=5&access_token=${process.env.USER_TOKEN}`;
    return await this.http.get(url).pipe(map(response => response.data)).toPromise();
  }
}
