import { type AttributeSetItemRequestBuilderGetQueryParameters } from './attributeSetItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AttributeSetItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AttributeSetItemRequestBuilderGetQueryParameters | undefined;
}
