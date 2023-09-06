import { type GroupSettingTemplateItemRequestBuilderGetQueryParameters } from './groupSettingTemplateItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplateItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GroupSettingTemplateItemRequestBuilderGetQueryParameters | undefined;
}
