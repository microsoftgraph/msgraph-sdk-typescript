import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {EmailAuthenticationMethodConfiguration} from './emailAuthenticationMethodConfiguration';
import {ExternalEmailOtpState} from './externalEmailOtpState';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAuthenticationMethodConfiguration(emailAuthenticationMethodConfiguration: EmailAuthenticationMethodConfiguration | undefined = {} as EmailAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(emailAuthenticationMethodConfiguration),
        "allowExternalIdToUseEmailOtp": n => { emailAuthenticationMethodConfiguration.allowExternalIdToUseEmailOtp = n.getEnumValue<ExternalEmailOtpState>(ExternalEmailOtpState); },
        "includeTargets": n => { emailAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
    }
}
