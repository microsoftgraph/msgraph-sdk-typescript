import {ErrorDetails} from './errorDetails';
import {InnerError} from './innerError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MainError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The code property
     */
    code?: string | undefined;
    /**
     * The details property
     */
    details?: ErrorDetails[] | undefined;
    /**
     * The innerError property
     */
    innerError?: InnerError | undefined;
    /**
     * The message property
     */
    message?: string | undefined;
    /**
     * The target property
     */
    target?: string | undefined;
}
