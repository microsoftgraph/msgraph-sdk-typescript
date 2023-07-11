import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationEncryption extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Possible values are: sharedSecret, unknownFutureValue.
     */
    protocol?: WorkforceIntegrationEncryptionProtocol | undefined;
    /**
     * Encryption shared secret.
     */
    secret?: string | undefined;
}
