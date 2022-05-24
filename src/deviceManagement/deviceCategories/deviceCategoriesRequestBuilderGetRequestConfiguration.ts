import {DeviceCategoriesRequestBuilderGetQueryParameters} from './deviceCategoriesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCategoriesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DeviceCategoriesRequestBuilderGetQueryParameters | undefined;
}
