import { AppKeyCredentialRestrictionType } from './appKeyCredentialRestrictionType';
import { type KeyCredentialConfiguration } from './keyCredentialConfiguration';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyCredentialConfiguration(keyCredentialConfiguration: KeyCredentialConfiguration | undefined = {} as KeyCredentialConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { keyCredentialConfiguration.maxLifetime = n.getDurationValue(); },
        "@odata.type": n => { keyCredentialConfiguration.odataType = n.getStringValue(); },
        "restrictForAppsCreatedAfterDateTime": n => { keyCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue(); },
        "restrictionType": n => { keyCredentialConfiguration.restrictionType = n.getEnumValue<AppKeyCredentialRestrictionType>(AppKeyCredentialRestrictionType); },
    }
}
