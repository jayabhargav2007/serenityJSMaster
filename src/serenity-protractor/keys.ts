import { protractor } from 'protractor';
import * as webdriver from 'selenium-webdriver';

export function keyNameOf(key: string) {
    let keys = definitionsFrom(protractor, webdriver);

    for ( let candidate in keys ) {
        if ( keys.hasOwnProperty(candidate) && keys[ candidate ] === key ) {
            return candidate;
        }
    }

    return key;
}

function definitionsFrom(...potentialSources) {
    return potentialSources.concat({ Key: [] }).find(source => source && source.Key).Key;
}
