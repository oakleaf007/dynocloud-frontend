import {generateMnemonic }from "@scure/bip39"

import {wordlist} from "@scure/bip39/wordlists/english.js";

export function generateRecoveryPhrase(){
    return generateMnemonic(wordlist, 256);
}