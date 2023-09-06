import { type WorkbookTableItemRequestBuilderGetQueryParameters } from './workbookTableItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WorkbookTableItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookTableItemRequestBuilderGetQueryParameters | undefined;
}
