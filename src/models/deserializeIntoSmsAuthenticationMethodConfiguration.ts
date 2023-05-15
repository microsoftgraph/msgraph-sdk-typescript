import {createSmsAuthenticationMethodTargetFromDiscriminatorValue} from './createSmsAuthenticationMethodTargetFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {serializeSmsAuthenticationMethodTarget} from './serializeSmsAuthenticationMethodTarget';
import {SmsAuthenticationMethodConfiguration} from './smsAuthenticationMethodConfiguration';
import {SmsAuthenticationMethodTarget} from './smsAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSmsAuthenticationMethodConfiguration(smsAuthenticationMethodConfiguration: SmsAuthenticationMethodConfiguration | undefined = {} as SmsAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(smsAuthenticationMethodConfiguration),
        "includeTargets": n => { smsAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<SmsAuthenticationMethodTarget>(createSmsAuthenticationMethodTargetFromDiscriminatorValue); },
    }
}
