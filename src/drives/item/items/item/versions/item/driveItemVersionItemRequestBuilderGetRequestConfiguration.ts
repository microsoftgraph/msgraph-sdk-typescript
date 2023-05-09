import {DriveItemVersionItemRequestBuilderGetQueryParameters} from './driveItemVersionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DriveItemVersionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DriveItemVersionItemRequestBuilderGetQueryParameters | undefined;
}
