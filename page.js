
import { browser } from '@wdio/globals'

export default class Page {
  
   async open () {
        await browser.url(`https://www.saucedemo.com/`)
    }
}
