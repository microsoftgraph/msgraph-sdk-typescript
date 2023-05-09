import {MajorGridlinesRequestBuilderGetQueryParameters} from './majorGridlinesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MajorGridlinesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: MajorGridlinesRequestBuilderGetQueryParameters | undefined;
}
