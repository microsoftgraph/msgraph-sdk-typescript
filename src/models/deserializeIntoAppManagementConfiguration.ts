import {AppManagementConfiguration} from './appManagementConfiguration';
import {createKeyCredentialConfigurationFromDiscriminatorValue} from './createKeyCredentialConfigurationFromDiscriminatorValue';
import {createPasswordCredentialConfigurationFromDiscriminatorValue} from './createPasswordCredentialConfigurationFromDiscriminatorValue';
import {KeyCredentialConfiguration} from './keyCredentialConfiguration';
import {PasswordCredentialConfiguration} from './passwordCredentialConfiguration';
import {serializeKeyCredentialConfiguration} from './serializeKeyCredentialConfiguration';
import {serializePasswordCredentialConfiguration} from './serializePasswordCredentialConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementConfiguration(appManagementConfiguration: AppManagementConfiguration | undefined = {} as AppManagementConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredentials": n => { appManagementConfiguration.keyCredentials = n.getCollectionOfObjectValues<KeyCredentialConfiguration>(createKeyCredentialConfigurationFromDiscriminatorValue); },
        "@odata.type": n => { appManagementConfiguration.odataType = n.getStringValue(); },
        "passwordCredentials": n => { appManagementConfiguration.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredentialConfiguration>(createPasswordCredentialConfigurationFromDiscriminatorValue); },
    }
}
