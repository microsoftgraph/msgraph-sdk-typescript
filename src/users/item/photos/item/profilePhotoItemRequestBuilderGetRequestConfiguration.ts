import {ProfilePhotoItemRequestBuilderGetQueryParameters} from './profilePhotoItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProfilePhotoItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ProfilePhotoItemRequestBuilderGetQueryParameters | undefined;
}
