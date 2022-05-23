import {HostedContentsRequestBuilderGetQueryParameters} from './hostedContentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HostedContentsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:HostedContentsRequestBuilderGetQueryParameters | undefined;
}
