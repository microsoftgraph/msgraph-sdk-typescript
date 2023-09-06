import { type MainError } from './mainError';
import { type AdditionalDataHolder, type ApiError, type Parsable } from '@microsoft/kiota-abstractions';

export interface ODataError extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error property
     */
    errorEscaped?: MainError | undefined;
}
