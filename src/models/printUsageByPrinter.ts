import {PrintUsage} from './printUsage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinter extends Partial<Parsable>, PrintUsage {
    /** The printerId property */
    printerId?: string | undefined;
}
