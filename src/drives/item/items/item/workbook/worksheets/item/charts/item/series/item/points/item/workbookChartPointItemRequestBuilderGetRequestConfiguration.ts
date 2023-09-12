import { type WorkbookChartPointItemRequestBuilderGetQueryParameters } from './workbookChartPointItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookChartPointItemRequestBuilderGetQueryParameters | undefined;
}
