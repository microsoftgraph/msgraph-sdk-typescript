import {PrinterProcessingState} from './printerProcessingState';

export interface PrinterStatus{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A human-readable description of the printer's current processing state. Read-only. */
    description?:string | undefined;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only. */
    details?:string[] | undefined;
    /** The current processing state. Valid values are described in the following table. Read-only. */
    state?:PrinterProcessingState | undefined;
}
