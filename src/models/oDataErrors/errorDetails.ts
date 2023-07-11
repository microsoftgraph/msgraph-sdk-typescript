import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ErrorDetails extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The code property
     */
    code?: string | undefined;
    /**
     * The message property
     */
    message?: string | undefined;
    /**
     * The target property
     */
    target?: string | undefined;
}
