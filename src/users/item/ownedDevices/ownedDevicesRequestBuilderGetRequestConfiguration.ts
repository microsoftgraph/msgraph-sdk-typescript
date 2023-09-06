import { type OwnedDevicesRequestBuilderGetQueryParameters } from './ownedDevicesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface OwnedDevicesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OwnedDevicesRequestBuilderGetQueryParameters | undefined;
}
