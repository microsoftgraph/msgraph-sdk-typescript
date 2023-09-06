import { type ProfilePhotoItemRequestBuilderGetQueryParameters } from './profilePhotoItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ProfilePhotoItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ProfilePhotoItemRequestBuilderGetQueryParameters | undefined;
}
