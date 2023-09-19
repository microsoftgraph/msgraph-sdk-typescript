import { type GraphWindowsWebAppRequestBuilderGetQueryParameters } from './graphWindowsWebAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphWindowsWebAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphWindowsWebAppRequestBuilderGetQueryParameters | undefined;
}
