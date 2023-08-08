import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import type {SmsAuthenticationMethodTarget} from './smsAuthenticationMethodTarget';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSmsAuthenticationMethodTarget(smsAuthenticationMethodTarget: SmsAuthenticationMethodTarget | undefined = {} as SmsAuthenticationMethodTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodTarget(smsAuthenticationMethodTarget),
        "isUsableForSignIn": n => { smsAuthenticationMethodTarget.isUsableForSignIn = n.getBooleanValue(); },
    }
}
