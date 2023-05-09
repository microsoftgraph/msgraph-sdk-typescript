import {DefaultPagesRequestBuilderGetQueryParameters} from './defaultPagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultPagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DefaultPagesRequestBuilderGetQueryParameters | undefined;
}
