import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseItemRequestBuilderPatchRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
