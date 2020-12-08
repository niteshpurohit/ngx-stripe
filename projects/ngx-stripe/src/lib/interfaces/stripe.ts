import { InjectionToken } from '@angular/core';
import { Element, RequestElementOptions } from './element';
import { Elements, ElementsOptions } from './elements';
import { SourceData, SourceParams, SourceResult } from './sources';
import {
  BankAccount,
  BankAccountData,
  CardDataOptions,
  ConfirmSetupIntentData,
  Pii,
  PiiData,
  SetupIntentData,
  SetupIntentResult,
  TokenResult,
  HandleCardPaymentOptions,
} from './token';

export const STRIPE_PUBLISHABLE_KEY = new InjectionToken<string>('Stripe Publishable Key');
export const STRIPE_OPTIONS = new InjectionToken<Options>('Stripe Options');

export interface StripeJS {
  elements(options?: ElementsOptions): Elements;
  createToken(el: Element, cardData?: CardDataOptions): Promise<TokenResult>;
  createToken(account: BankAccount, bankAccountData: BankAccountData): Promise<TokenResult>;
  createToken(pii: Pii, piiData: PiiData): Promise<TokenResult>;
  createSource(el: Element, sourceData?: SourceData): Promise<SourceResult>;
  createSource(sourceData: SourceData): Promise<SourceResult>;
  paymentRequest(options: RequestElementOptions);
  handleCardSetup(clientSecret: string, el: Element, cardSetupOptions?: SetupIntentData): Promise<SetupIntentResult>;
  handleCardAction(clientSecret: string);
  handleCardPayment(clientSecret: string, data: HandleCardPaymentOptions, options: any);
  retrievePaymentIntent(clientSecret: string);
  confirmSetupIntent(clientSecret: string, el: Element, data: ConfirmSetupIntentData);
  retrieveSetupIntent(clientSecret: string);
  retrieveSource(source: SourceParams): Promise<SourceResult>;
}

export interface Options {
  stripeAccount?: string;
}
