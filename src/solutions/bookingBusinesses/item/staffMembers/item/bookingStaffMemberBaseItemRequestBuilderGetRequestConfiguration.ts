import {BookingStaffMemberBaseItemRequestBuilderGetQueryParameters} from './bookingStaffMemberBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: BookingStaffMemberBaseItemRequestBuilderGetQueryParameters | undefined;
}
