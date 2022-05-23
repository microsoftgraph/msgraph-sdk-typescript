import {KeyCredential} from '../../../../../../models/keyCredential';
import {PasswordCredential} from '../../../../../../models/passwordCredential';

export interface KeyCredentialPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The keyCredential property */
    keyCredential?:KeyCredential | undefined;
    /** The passwordCredential property */
    passwordCredential?:PasswordCredential | undefined;
    /** The proof property */
    proof?:string | undefined;
}
