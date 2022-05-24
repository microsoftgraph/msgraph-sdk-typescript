import {MobileLobAppRequestBuilderGetQueryParameters} from './mobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileLobAppRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:MobileLobAppRequestBuilderGetQueryParameters | undefined;
}
