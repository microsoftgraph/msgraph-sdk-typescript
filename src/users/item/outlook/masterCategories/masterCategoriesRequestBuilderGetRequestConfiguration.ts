import {MasterCategoriesRequestBuilderGetQueryParameters} from './masterCategoriesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MasterCategoriesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:MasterCategoriesRequestBuilderGetQueryParameters | undefined;
}
