import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {PasswordCredentialConfiguration} from './passwordCredentialConfiguration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordCredentialConfiguration(passwordCredentialConfiguration: PasswordCredentialConfiguration | undefined = {} as PasswordCredentialConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { passwordCredentialConfiguration.maxLifetime = n.getDurationValue(); },
        "@odata.type": n => { passwordCredentialConfiguration.odataType = n.getStringValue(); },
        "restrictForAppsCreatedAfterDateTime": n => { passwordCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue(); },
        "restrictionType": n => { passwordCredentialConfiguration.restrictionType = n.getEnumValue<AppCredentialRestrictionType>(AppCredentialRestrictionType); },
    }
}
