import {WorkbookChartItemRequestBuilderGetQueryParameters} from './workbookChartItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookChartItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookChartItemRequestBuilderGetQueryParameters | undefined;
}
