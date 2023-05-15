import {ConditionalAccessTemplateItemRequestBuilderGetQueryParameters} from './conditionalAccessTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ConditionalAccessTemplateItemRequestBuilderGetQueryParameters | undefined;
}
