import {KeyCredentialConfiguration} from './keyCredentialConfiguration';
import {PasswordCredentialConfiguration} from './passwordCredentialConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppManagementConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Collection of keyCredential restrictions settings to be applied to an application or service principal.
     */
    keyCredentials?: KeyCredentialConfiguration[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Collection of password restrictions settings to be applied to an application or service principal.
     */
    passwordCredentials?: PasswordCredentialConfiguration[] | undefined;
}
