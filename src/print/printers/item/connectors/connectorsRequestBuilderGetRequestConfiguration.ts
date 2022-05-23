import {ConnectorsRequestBuilderGetQueryParameters} from './connectorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectorsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ConnectorsRequestBuilderGetQueryParameters | undefined;
}
