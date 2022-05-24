import {PrintUsage} from './printUsage';

export interface PrintUsageByPrinter extends PrintUsage{
    /** The printerId property */
    printerId?:string | undefined;
}
