import { type GraphMacOSDmgAppRequestBuilderGetQueryParameters } from './graphMacOSDmgAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphMacOSDmgAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphMacOSDmgAppRequestBuilderGetQueryParameters | undefined;
}
