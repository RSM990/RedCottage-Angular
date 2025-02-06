import { Injectable } from '@angular/core';

export enum BrowserType {
  Firefox = 'Firefox',
  Chrome = 'Chrome',
  Edge = 'Edge',
  Safari = 'Safari',
  Opera = 'Opera',
  InternetExplorer = 'Internet Explorer',
  SamsungInternet = 'Samsung Internet',
  iOSSafari = 'iOS Safari',
  AndroidChrome = 'Android Chrome',
  Unknown = 'Unknown Browser',
}

@Injectable({
  providedIn: 'root',
})
export class BrowserDetectionService {
  private userAgent = navigator.userAgent.toLowerCase();

  isFirefox(): boolean {
    return this.userAgent.includes('firefox');
  }

  isChrome(): boolean {
    return (
      this.userAgent.includes('chrome') &&
      !this.userAgent.includes('edge') &&
      !this.userAgent.includes('opr')
    );
  }

  isEdge(): boolean {
    return this.userAgent.includes('edg');
  }

  isSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  isOpera(): boolean {
    return this.userAgent.includes('opr') || this.userAgent.includes('opera');
  }

  isIE(): boolean {
    return (
      this.userAgent.includes('msie') || this.userAgent.includes('trident')
    );
  }

  isSamsungInternet(): boolean {
    return this.userAgent.includes('samsung');
  }

  isIOSSafari(): boolean {
    return /iphone|ipad|ipod/i.test(this.userAgent) && this.isSafari();
  }

  isAndroidChrome(): boolean {
    return /android/i.test(this.userAgent) && this.isChrome();
  }

  getBrowserName(): BrowserType {
    if (this.isIOSSafari()) return BrowserType.iOSSafari;
    if (this.isAndroidChrome()) return BrowserType.AndroidChrome;
    if (this.isSamsungInternet()) return BrowserType.SamsungInternet;
    if (this.isFirefox()) return BrowserType.Firefox;
    if (this.isChrome()) return BrowserType.Chrome;
    if (this.isEdge()) return BrowserType.Edge;
    if (this.isSafari()) return BrowserType.Safari;
    if (this.isOpera()) return BrowserType.Opera;
    if (this.isIE()) return BrowserType.InternetExplorer;
    return BrowserType.Unknown;
  }
}
