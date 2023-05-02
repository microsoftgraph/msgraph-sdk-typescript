import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {SmsAuthenticationMethodTarget} from './smsAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSmsAuthenticationMethodTarget(writer: SerializationWriter, smsAuthenticationMethodTarget: SmsAuthenticationMethodTarget | undefined = {} as SmsAuthenticationMethodTarget) : void {
        serializeAuthenticationMethodTarget(writer, smsAuthenticationMethodTarget)
        writer.writeBooleanValue("isUsableForSignIn", smsAuthenticationMethodTarget.isUsableForSignIn);
}
