import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {PasswordCredentialConfiguration} from './passwordCredentialConfiguration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordCredentialConfiguration(writer: SerializationWriter, passwordCredentialConfiguration: PasswordCredentialConfiguration | undefined = {} as PasswordCredentialConfiguration) : void {
        writer.writeDurationValue("maxLifetime", passwordCredentialConfiguration.maxLifetime);
        writer.writeStringValue("@odata.type", passwordCredentialConfiguration.odataType);
        writer.writeDateValue("restrictForAppsCreatedAfterDateTime", passwordCredentialConfiguration.restrictForAppsCreatedAfterDateTime);
        writer.writeEnumValue<AppCredentialRestrictionType>("restrictionType", passwordCredentialConfiguration.restrictionType);
        writer.writeAdditionalData(passwordCredentialConfiguration.additionalData);
}
