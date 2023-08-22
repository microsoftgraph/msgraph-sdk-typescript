import type {MainError} from './mainError';
import {ApiError} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ODataError extends @microsoft/kiota-abstractions, AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error property
     */
    errorEscaped?: MainError | undefined;
}
