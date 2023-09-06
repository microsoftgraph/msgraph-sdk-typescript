import { serializeAuthenticationMethodTarget } from './serializeAuthenticationMethodTarget';
import { type SmsAuthenticationMethodTarget } from './smsAuthenticationMethodTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSmsAuthenticationMethodTarget(writer: SerializationWriter, smsAuthenticationMethodTarget: SmsAuthenticationMethodTarget | undefined = {} as SmsAuthenticationMethodTarget) : void {
        serializeAuthenticationMethodTarget(writer, smsAuthenticationMethodTarget)
        writer.writeBooleanValue("isUsableForSignIn", smsAuthenticationMethodTarget.isUsableForSignIn);
}
