import { type WorkbookPivotTableItemRequestBuilderGetQueryParameters } from './workbookPivotTableItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTableItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookPivotTableItemRequestBuilderGetQueryParameters | undefined;
}
