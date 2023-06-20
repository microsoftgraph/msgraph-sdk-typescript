import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {EmailAuthenticationMethodConfiguration} from './emailAuthenticationMethodConfiguration';
import {ExternalEmailOtpState} from './externalEmailOtpState';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethodConfiguration(emailAuthenticationMethodConfiguration: EmailAuthenticationMethodConfiguration | undefined = {} as EmailAuthenticationMethodConfiguration, writer: SerializationWriter) : void {
        serializeAuthenticationMethodConfiguration(writer, emailAuthenticationMethodConfiguration)
        writer.writeEnumValue<ExternalEmailOtpState>("allowExternalIdToUseEmailOtp", emailAuthenticationMethodConfiguration.allowExternalIdToUseEmailOtp);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", emailAuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
}
