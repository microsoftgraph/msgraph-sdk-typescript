import {ExternalGroupItemRequestBuilderGetQueryParameters} from './externalGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalGroupItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ExternalGroupItemRequestBuilderGetQueryParameters | undefined;
}
