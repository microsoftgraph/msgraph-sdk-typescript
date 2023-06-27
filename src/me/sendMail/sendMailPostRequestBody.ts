import {Message} from '../../models/message';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SendMailPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The Message property
     */
    message?: Message | undefined;
    /**
     * The SaveToSentItems property
     */
    saveToSentItems?: boolean | undefined;
}
