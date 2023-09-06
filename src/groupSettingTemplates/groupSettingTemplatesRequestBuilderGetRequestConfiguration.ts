import { type GroupSettingTemplatesRequestBuilderGetQueryParameters } from './groupSettingTemplatesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplatesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GroupSettingTemplatesRequestBuilderGetQueryParameters | undefined;
}
