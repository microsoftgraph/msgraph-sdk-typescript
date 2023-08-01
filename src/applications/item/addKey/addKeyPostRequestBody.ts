import type {KeyCredential} from '../../../models/keyCredential';
import type {PasswordCredential} from '../../../models/passwordCredential';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddKeyPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The keyCredential property
     */
    keyCredential?: KeyCredential | undefined;
    /**
     * The passwordCredential property
     */
    passwordCredential?: PasswordCredential | undefined;
    /**
     * The proof property
     */
    proof?: string | undefined;
}
