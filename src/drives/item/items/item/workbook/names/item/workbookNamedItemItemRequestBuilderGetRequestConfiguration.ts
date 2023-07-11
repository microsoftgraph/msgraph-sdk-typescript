import {WorkbookNamedItemItemRequestBuilderGetQueryParameters} from './workbookNamedItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItemItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookNamedItemItemRequestBuilderGetQueryParameters | undefined;
}
