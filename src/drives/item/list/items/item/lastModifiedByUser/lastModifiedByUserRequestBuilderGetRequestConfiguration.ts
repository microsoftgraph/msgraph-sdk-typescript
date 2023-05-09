import {LastModifiedByUserRequestBuilderGetQueryParameters} from './lastModifiedByUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastModifiedByUserRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: LastModifiedByUserRequestBuilderGetQueryParameters | undefined;
}
