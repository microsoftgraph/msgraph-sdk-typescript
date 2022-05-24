import {PublicError} from './publicError';

export interface ActionResultPart{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The error that occurred, if any, during the course of the bulk operation. */
    error_escaped?:PublicError | undefined;
}
