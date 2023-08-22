import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import type {KeyCredentialConfiguration} from './keyCredentialConfiguration';
import {Duration} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyCredentialConfiguration(keyCredentialConfiguration: KeyCredentialConfiguration | undefined = {} as KeyCredentialConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { keyCredentialConfiguration.maxLifetime = n.getDurationValue(); },
        "@odata.type": n => { keyCredentialConfiguration.odataType = n.getStringValue(); },
        "restrictForAppsCreatedAfterDateTime": n => { keyCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue(); },
        "restrictionType": n => { keyCredentialConfiguration.restrictionType = n.getEnumValue<AppKeyCredentialRestrictionType>(AppKeyCredentialRestrictionType); },
    }
}
