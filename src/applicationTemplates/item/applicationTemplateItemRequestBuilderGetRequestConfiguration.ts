import {ApplicationTemplateItemRequestBuilderGetQueryParameters} from './applicationTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ApplicationTemplateItemRequestBuilderGetQueryParameters | undefined;
}
