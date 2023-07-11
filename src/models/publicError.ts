import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublicError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Represents the error code.
     */
    code?: string | undefined;
    /**
     * Details of the error.
     */
    details?: PublicErrorDetail[] | undefined;
    /**
     * Details of the inner error.
     */
    innerError?: PublicInnerError | undefined;
    /**
     * A non-localized message for the developer.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The target of the error.
     */
    target?: string | undefined;
}
