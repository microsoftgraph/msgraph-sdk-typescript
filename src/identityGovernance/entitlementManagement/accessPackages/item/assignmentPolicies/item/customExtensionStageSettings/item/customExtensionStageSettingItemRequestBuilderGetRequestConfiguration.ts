import { type CustomExtensionStageSettingItemRequestBuilderGetQueryParameters } from './customExtensionStageSettingItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomExtensionStageSettingItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomExtensionStageSettingItemRequestBuilderGetQueryParameters | undefined;
}
