import {GenericError} from './genericError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConvertIdResult extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * An error object indicating the reason for the conversion failure. This value is not present if the conversion succeeded.
     */
    errorDetails?: GenericError | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The identifier that was converted. This value is the original, un-converted identifier.
     */
    sourceId?: string | undefined;
    /**
     * The converted identifier. This value is not present if the conversion failed.
     */
    targetId?: string | undefined;
}
