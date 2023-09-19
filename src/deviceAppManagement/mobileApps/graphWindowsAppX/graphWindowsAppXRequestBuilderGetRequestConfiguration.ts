import { type GraphWindowsAppXRequestBuilderGetQueryParameters } from './graphWindowsAppXRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphWindowsAppXRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphWindowsAppXRequestBuilderGetQueryParameters | undefined;
}
