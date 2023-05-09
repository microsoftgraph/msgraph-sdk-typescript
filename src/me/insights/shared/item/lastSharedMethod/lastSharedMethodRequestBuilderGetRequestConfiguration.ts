import {LastSharedMethodRequestBuilderGetQueryParameters} from './lastSharedMethodRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastSharedMethodRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: LastSharedMethodRequestBuilderGetQueryParameters | undefined;
}
