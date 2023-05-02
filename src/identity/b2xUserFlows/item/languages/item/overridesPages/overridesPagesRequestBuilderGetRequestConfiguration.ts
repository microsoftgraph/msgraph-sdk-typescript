import {OverridesPagesRequestBuilderGetQueryParameters} from './overridesPagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OverridesPagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OverridesPagesRequestBuilderGetQueryParameters | undefined;
}
