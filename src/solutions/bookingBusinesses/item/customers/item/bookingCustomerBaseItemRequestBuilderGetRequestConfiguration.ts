import {BookingCustomerBaseItemRequestBuilderGetQueryParameters} from './bookingCustomerBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:BookingCustomerBaseItemRequestBuilderGetQueryParameters | undefined;
}
