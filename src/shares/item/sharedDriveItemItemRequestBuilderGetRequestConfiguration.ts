import {SharedDriveItemItemRequestBuilderGetQueryParameters} from './sharedDriveItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedDriveItemItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SharedDriveItemItemRequestBuilderGetQueryParameters | undefined;
}
