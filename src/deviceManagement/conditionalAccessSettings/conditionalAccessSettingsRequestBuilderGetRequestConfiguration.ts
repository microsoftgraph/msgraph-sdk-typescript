import {ConditionalAccessSettingsRequestBuilderGetQueryParameters} from './conditionalAccessSettingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessSettingsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ConditionalAccessSettingsRequestBuilderGetQueryParameters | undefined;
}
