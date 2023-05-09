import {ChecklistItemsRequestBuilderGetQueryParameters} from './checklistItemsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChecklistItemsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ChecklistItemsRequestBuilderGetQueryParameters | undefined;
}
