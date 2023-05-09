import {DailyPrintUsageByUserRequestBuilderGetQueryParameters} from './dailyPrintUsageByUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DailyPrintUsageByUserRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DailyPrintUsageByUserRequestBuilderGetQueryParameters | undefined;
}
