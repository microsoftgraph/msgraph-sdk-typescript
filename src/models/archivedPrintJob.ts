import {PrintJobProcessingState} from './printJobProcessingState';
import {UserIdentity} from './userIdentity';

export interface ArchivedPrintJob{
    /** True if the job was acquired by a printer; false otherwise. Read-only. */
    acquiredByPrinter?:boolean | undefined;
    /** The dateTimeOffset when the job was acquired by the printer, if any. Read-only. */
    acquiredDateTime?:Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The dateTimeOffset when the job was completed, canceled or aborted. Read-only. */
    completionDateTime?:Date | undefined;
    /** The number of copies that were printed. Read-only. */
    copiesPrinted?:number | undefined;
    /** The user who created the print job. Read-only. */
    createdBy?:UserIdentity | undefined;
    /** The dateTimeOffset when the job was created. Read-only. */
    createdDateTime?:Date | undefined;
    /** The archived print job's GUID. Read-only. */
    id?:string | undefined;
    /** The printer ID that the job was queued for. Read-only. */
    printerId?:string | undefined;
    /** The print job's final processing state. Read-only. */
    processingState?:PrintJobProcessingState | undefined;
}
