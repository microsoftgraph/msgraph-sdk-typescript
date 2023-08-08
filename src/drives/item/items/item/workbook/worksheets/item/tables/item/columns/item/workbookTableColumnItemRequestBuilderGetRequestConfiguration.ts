import {WorkbookTableColumnItemRequestBuilderGetQueryParameters} from './workbookTableColumnItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumnItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookTableColumnItemRequestBuilderGetQueryParameters | undefined;
}
