import {WorkbookTableItemRequestBuilderGetQueryParameters} from './workbookTableItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookTableItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: WorkbookTableItemRequestBuilderGetQueryParameters | undefined;
}
