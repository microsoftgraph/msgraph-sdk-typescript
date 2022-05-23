import {PrintJobProcessingState} from './printJobProcessingState';

export interface PrintJobStatus{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A human-readable description of the print job's current processing state. Read-only. */
    description?:string | undefined;
    /** Additional details for print job state. Valid values are described in the following table. Read-only. */
    details?:string[] | undefined;
    /** True if the job was acknowledged by a printer; false otherwise. Read-only. */
    isAcquiredByPrinter?:boolean | undefined;
    /** The print job's current processing state. Valid values are described in the following table. Read-only. */
    state?:PrintJobProcessingState | undefined;
}
