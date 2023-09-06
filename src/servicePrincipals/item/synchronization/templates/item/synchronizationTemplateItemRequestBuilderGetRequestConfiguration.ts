import { type SynchronizationTemplateItemRequestBuilderGetQueryParameters } from './synchronizationTemplateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SynchronizationTemplateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SynchronizationTemplateItemRequestBuilderGetQueryParameters | undefined;
}
