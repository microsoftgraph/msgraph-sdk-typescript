import { createSmsAuthenticationMethodTargetFromDiscriminatorValue } from './createSmsAuthenticationMethodTargetFromDiscriminatorValue';
import { deserializeIntoAuthenticationMethodConfiguration } from './deserializeIntoAuthenticationMethodConfiguration';
import { serializeSmsAuthenticationMethodTarget } from './serializeSmsAuthenticationMethodTarget';
import { type SmsAuthenticationMethodConfiguration } from './smsAuthenticationMethodConfiguration';
import { type SmsAuthenticationMethodTarget } from './smsAuthenticationMethodTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSmsAuthenticationMethodConfiguration(smsAuthenticationMethodConfiguration: SmsAuthenticationMethodConfiguration | undefined = {} as SmsAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(smsAuthenticationMethodConfiguration),
        "includeTargets": n => { smsAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<SmsAuthenticationMethodTarget>(createSmsAuthenticationMethodTargetFromDiscriminatorValue); },
    }
}
