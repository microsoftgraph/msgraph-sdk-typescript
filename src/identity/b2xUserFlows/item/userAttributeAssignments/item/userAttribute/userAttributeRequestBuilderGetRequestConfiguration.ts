import {UserAttributeRequestBuilderGetQueryParameters} from './userAttributeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserAttributeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: UserAttributeRequestBuilderGetQueryParameters | undefined;
}
