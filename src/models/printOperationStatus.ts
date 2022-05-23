import {PrintOperationProcessingState} from './printOperationProcessingState';

export interface PrintOperationStatus{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A human-readable description of the printOperation's current processing state. Read-only. */
    description?:string | undefined;
    /** The printOperation's current processing state. Valid values are described in the following table. Read-only. */
    state?:PrintOperationProcessingState | undefined;
}
