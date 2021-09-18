import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  constructor(public bitCoinServ: BitcoinService) {}

  private timer: any;

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.bitCoinServ.updateBitCoinRates();
      }, 60000);
    }
  }
}
