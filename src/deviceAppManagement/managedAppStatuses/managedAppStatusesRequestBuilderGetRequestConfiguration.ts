import {ManagedAppStatusesRequestBuilderGetQueryParameters} from './managedAppStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/** Configuration for the request such as headers, query parameters, and middleware options. */
export class ManagedAppStatusesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: ManagedAppStatusesRequestBuilderGetQueryParameters | undefined;
}
