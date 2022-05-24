import {Entity} from './entity';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';

export interface ReportRoot extends Entity{
    /** The dailyPrintUsageByPrinter property */
    dailyPrintUsageByPrinter?:PrintUsageByPrinter[] | undefined;
    /** The dailyPrintUsageByUser property */
    dailyPrintUsageByUser?:PrintUsageByUser[] | undefined;
    /** The monthlyPrintUsageByPrinter property */
    monthlyPrintUsageByPrinter?:PrintUsageByPrinter[] | undefined;
    /** The monthlyPrintUsageByUser property */
    monthlyPrintUsageByUser?:PrintUsageByUser[] | undefined;
}
