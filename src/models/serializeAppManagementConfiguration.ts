import { type AppManagementConfiguration } from './appManagementConfiguration';
import { type KeyCredentialConfiguration } from './keyCredentialConfiguration';
import { type PasswordCredentialConfiguration } from './passwordCredentialConfiguration';
import { serializeKeyCredentialConfiguration } from './serializeKeyCredentialConfiguration';
import { serializePasswordCredentialConfiguration } from './serializePasswordCredentialConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppManagementConfiguration(writer: SerializationWriter, appManagementConfiguration: AppManagementConfiguration | undefined = {} as AppManagementConfiguration) : void {
        writer.writeCollectionOfObjectValues<KeyCredentialConfiguration>("keyCredentials", appManagementConfiguration.keyCredentials, serializeKeyCredentialConfiguration);
        writer.writeStringValue("@odata.type", appManagementConfiguration.odataType);
        writer.writeCollectionOfObjectValues<PasswordCredentialConfiguration>("passwordCredentials", appManagementConfiguration.passwordCredentials, serializePasswordCredentialConfiguration);
        writer.writeAdditionalData(appManagementConfiguration.additionalData);
}
