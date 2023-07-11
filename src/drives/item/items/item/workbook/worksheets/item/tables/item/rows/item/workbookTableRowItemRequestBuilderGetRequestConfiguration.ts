import {WorkbookTableRowItemRequestBuilderGetQueryParameters} from './workbookTableRowItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookTableRowItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookTableRowItemRequestBuilderGetQueryParameters | undefined;
}
