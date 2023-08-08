import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import type {PasswordCredentialConfiguration} from './passwordCredentialConfiguration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordCredentialConfiguration(passwordCredentialConfiguration: PasswordCredentialConfiguration | undefined = {} as PasswordCredentialConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { passwordCredentialConfiguration.maxLifetime = n.getDurationValue(); },
        "@odata.type": n => { passwordCredentialConfiguration.odataType = n.getStringValue(); },
        "restrictForAppsCreatedAfterDateTime": n => { passwordCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue(); },
        "restrictionType": n => { passwordCredentialConfiguration.restrictionType = n.getEnumValue<AppCredentialRestrictionType>(AppCredentialRestrictionType); },
    }
}
