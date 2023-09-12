import { type WorkbookNamedItemItemRequestBuilderGetQueryParameters } from './workbookNamedItemItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
