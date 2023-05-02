import {GroupSettingItemRequestBuilderGetQueryParameters} from './groupSettingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GroupSettingItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: GroupSettingItemRequestBuilderGetQueryParameters | undefined;
}
