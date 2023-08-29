import type {Entity} from './entity';
import type {PrintJob} from './printJob';
import type {PrinterCapabilities} from './printerCapabilities';
import type {PrinterDefaults} from './printerDefaults';
import type {PrinterLocation} from './printerLocation';
import type {PrinterStatus} from './printerStatus';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterBase extends Entity, Parsable {
    /**
     * The capabilities of the printer/printerShare.
     */
    capabilities?: PrinterCapabilities | undefined;
    /**
     * The default print settings of printer/printerShare.
     */
    defaults?: PrinterDefaults | undefined;
    /**
     * The name of the printer/printerShare.
     */
    displayName?: string | undefined;
    /**
     * Whether the printer/printerShare is currently accepting new print jobs.
     */
    isAcceptingJobs?: boolean | undefined;
    /**
     * The list of jobs that are queued for printing by the printer/printerShare.
     */
    jobs?: PrintJob[] | undefined;
    /**
     * The physical and/or organizational location of the printer/printerShare.
     */
    location?: PrinterLocation | undefined;
    /**
     * The manufacturer of the printer/printerShare.
     */
    manufacturer?: string | undefined;
    /**
     * The model name of the printer/printerShare.
     */
    model?: string | undefined;
    /**
     * The status property
     */
    status?: PrinterStatus | undefined;
}
