import {MobileAppItemRequestBuilderGetQueryParameters} from './mobileAppItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:MobileAppItemRequestBuilderGetQueryParameters | undefined;
}
