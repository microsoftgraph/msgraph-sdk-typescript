import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';

export interface WorkforceIntegrationEncryption{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Possible values are: sharedSecret, unknownFutureValue. */
    protocol?:WorkforceIntegrationEncryptionProtocol | undefined;
    /** Encryption shared secret. */
    secret?:string | undefined;
}
