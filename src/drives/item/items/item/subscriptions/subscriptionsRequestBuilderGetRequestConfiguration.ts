import {SubscriptionsRequestBuilderGetQueryParameters} from './subscriptionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscriptionsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SubscriptionsRequestBuilderGetQueryParameters | undefined;
}
