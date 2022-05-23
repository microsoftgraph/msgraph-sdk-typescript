import {AcceptanceStatusesRequestBuilderGetQueryParameters} from './acceptanceStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AcceptanceStatusesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AcceptanceStatusesRequestBuilderGetQueryParameters | undefined;
}
