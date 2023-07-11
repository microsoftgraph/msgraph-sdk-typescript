import {DailyPrintUsageByPrinterRequestBuilderGetQueryParameters} from './dailyPrintUsageByPrinterRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DailyPrintUsageByPrinterRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DailyPrintUsageByPrinterRequestBuilderGetQueryParameters | undefined;
}
