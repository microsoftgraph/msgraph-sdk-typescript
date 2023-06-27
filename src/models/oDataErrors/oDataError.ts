import {MainError} from './mainError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ODataError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error property
     */
    errorEscaped?: MainError | undefined;
}
