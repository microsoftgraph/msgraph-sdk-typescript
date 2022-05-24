import {PasswordCredential} from '../../../models/passwordCredential';

export interface PasswordCredentialPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The passwordCredential property */
    passwordCredential?:PasswordCredential | undefined;
}
