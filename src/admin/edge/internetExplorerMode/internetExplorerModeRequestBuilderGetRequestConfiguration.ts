import { type InternetExplorerModeRequestBuilderGetQueryParameters } from './internetExplorerModeRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface InternetExplorerModeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InternetExplorerModeRequestBuilderGetQueryParameters | undefined;
}
