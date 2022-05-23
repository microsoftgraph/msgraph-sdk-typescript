import {PrintTaskProcessingState} from './printTaskProcessingState';

export interface PrintTaskStatus{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A human-readable description of the current processing state of the printTask. */
    description?:string | undefined;
    /** The current processing state of the printTask. Valid values are described in the following table. */
    state?:PrintTaskProcessingState | undefined;
}
