import { type OwnedObjectsRequestBuilderGetQueryParameters } from './ownedObjectsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface OwnedObjectsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OwnedObjectsRequestBuilderGetQueryParameters | undefined;
}
