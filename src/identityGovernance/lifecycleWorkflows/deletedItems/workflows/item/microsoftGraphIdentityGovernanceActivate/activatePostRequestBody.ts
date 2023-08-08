import type {User} from '../../../../../../models/user';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ActivatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The subjects property
     */
    subjects?: User[] | undefined;
}
