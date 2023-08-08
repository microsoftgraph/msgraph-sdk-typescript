import {WorkbookWorksheetItemRequestBuilderGetQueryParameters} from './workbookWorksheetItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkbookWorksheetItemRequestBuilderGetQueryParameters | undefined;
}
