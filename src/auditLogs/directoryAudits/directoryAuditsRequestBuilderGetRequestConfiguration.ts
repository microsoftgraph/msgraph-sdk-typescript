import {DirectoryAuditsRequestBuilderGetQueryParameters} from './directoryAuditsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DirectoryAuditsRequestBuilderGetQueryParameters | undefined;
}
