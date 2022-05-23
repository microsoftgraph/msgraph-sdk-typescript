import {LocalizedNotificationMessagesRequestBuilderGetQueryParameters} from './localizedNotificationMessagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:LocalizedNotificationMessagesRequestBuilderGetQueryParameters | undefined;
}
