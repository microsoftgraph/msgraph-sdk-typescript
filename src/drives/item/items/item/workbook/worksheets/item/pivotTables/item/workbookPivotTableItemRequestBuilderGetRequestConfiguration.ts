import {WorkbookPivotTableItemRequestBuilderGetQueryParameters} from './workbookPivotTableItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTableItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: WorkbookPivotTableItemRequestBuilderGetQueryParameters | undefined;
}
