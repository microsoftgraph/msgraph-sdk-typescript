import {WorkbookOperationItemRequestBuilderGetQueryParameters} from './workbookOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class WorkbookOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: WorkbookOperationItemRequestBuilderGetQueryParameters | undefined;
}
