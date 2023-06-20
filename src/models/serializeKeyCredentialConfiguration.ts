import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import {KeyCredentialConfiguration} from './keyCredentialConfiguration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyCredentialConfiguration(keyCredentialConfiguration: KeyCredentialConfiguration | undefined = {} as KeyCredentialConfiguration, writer: SerializationWriter) : void {
        writer.writeDurationValue("maxLifetime", keyCredentialConfiguration.maxLifetime);
        writer.writeStringValue("@odata.type", keyCredentialConfiguration.odataType);
        writer.writeDateValue("restrictForAppsCreatedAfterDateTime", keyCredentialConfiguration.restrictForAppsCreatedAfterDateTime);
        writer.writeEnumValue<AppKeyCredentialRestrictionType>("restrictionType", keyCredentialConfiguration.restrictionType);
        writer.writeAdditionalData(keyCredentialConfiguration.additionalData);
}
