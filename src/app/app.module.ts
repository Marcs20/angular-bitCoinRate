import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'bitcoin', component: BitcoinComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, BitcoinComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService, TimerService],
})
export class AppModule {}
