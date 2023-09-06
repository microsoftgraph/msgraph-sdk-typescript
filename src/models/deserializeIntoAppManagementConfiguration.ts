import { type AppManagementConfiguration } from './appManagementConfiguration';
import { createKeyCredentialConfigurationFromDiscriminatorValue } from './createKeyCredentialConfigurationFromDiscriminatorValue';
import { createPasswordCredentialConfigurationFromDiscriminatorValue } from './createPasswordCredentialConfigurationFromDiscriminatorValue';
import { type KeyCredentialConfiguration } from './keyCredentialConfiguration';
import { type PasswordCredentialConfiguration } from './passwordCredentialConfiguration';
import { serializeKeyCredentialConfiguration } from './serializeKeyCredentialConfiguration';
import { serializePasswordCredentialConfiguration } from './serializePasswordCredentialConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementConfiguration(appManagementConfiguration: AppManagementConfiguration | undefined = {} as AppManagementConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredentials": n => { appManagementConfiguration.keyCredentials = n.getCollectionOfObjectValues<KeyCredentialConfiguration>(createKeyCredentialConfigurationFromDiscriminatorValue); },
        "@odata.type": n => { appManagementConfiguration.odataType = n.getStringValue(); },
        "passwordCredentials": n => { appManagementConfiguration.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredentialConfiguration>(createPasswordCredentialConfigurationFromDiscriminatorValue); },
    }
}
