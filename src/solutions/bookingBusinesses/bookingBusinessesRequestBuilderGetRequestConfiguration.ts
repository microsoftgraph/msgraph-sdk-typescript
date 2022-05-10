import {BookingBusinessesRequestBuilderGetQueryParameters} from './bookingBusinessesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/** Configuration for the request such as headers, query parameters, and middleware options. */
export class BookingBusinessesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: BookingBusinessesRequestBuilderGetQueryParameters | undefined;
}
