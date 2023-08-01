import type {PrintUsage} from './printUsage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinter extends Parsable, PrintUsage {
    /**
     * The printerId property
     */
    printerId?: string | undefined;
    /**
     * The name of the printer represented by these statistics.
     */
    printerName?: string | undefined;
}
