import { type MonthlyPrintUsageByPrinterRequestBuilderGetQueryParameters } from './monthlyPrintUsageByPrinterRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MonthlyPrintUsageByPrinterRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: MonthlyPrintUsageByPrinterRequestBuilderGetQueryParameters | undefined;
}
