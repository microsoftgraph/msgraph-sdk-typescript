import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeSmsAuthenticationMethodTarget} from './serializeSmsAuthenticationMethodTarget';
import {SmsAuthenticationMethodConfiguration} from './smsAuthenticationMethodConfiguration';
import {SmsAuthenticationMethodTarget} from './smsAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSmsAuthenticationMethodConfiguration(writer: SerializationWriter, smsAuthenticationMethodConfiguration: SmsAuthenticationMethodConfiguration | undefined = {} as SmsAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, smsAuthenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<SmsAuthenticationMethodTarget>("includeTargets", smsAuthenticationMethodConfiguration.includeTargets, serializeSmsAuthenticationMethodTarget);
}
