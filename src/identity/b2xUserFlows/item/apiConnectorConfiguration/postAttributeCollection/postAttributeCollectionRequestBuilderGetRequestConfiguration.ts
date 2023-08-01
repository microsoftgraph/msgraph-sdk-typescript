import {PostAttributeCollectionRequestBuilderGetQueryParameters} from './postAttributeCollectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PostAttributeCollectionRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: PostAttributeCollectionRequestBuilderGetQueryParameters | undefined;
}
