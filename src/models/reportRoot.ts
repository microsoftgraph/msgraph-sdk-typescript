import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';
import {SecurityReportsRoot} from './securityReportsRoot';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ReportRoot extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The dailyPrintUsageByPrinter property
     */
    dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /**
     * The dailyPrintUsageByUser property
     */
    dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * The monthlyPrintUsageByPrinter property
     */
    monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /**
     * The monthlyPrintUsageByUser property
     */
    monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The security property
     */
    security?: SecurityReportsRoot | undefined;
}
