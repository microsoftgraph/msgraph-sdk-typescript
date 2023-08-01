import type {PublicError} from './publicError';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ActionResultPart extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error that occurred, if any, during the course of the bulk operation.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
