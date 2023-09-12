import { type ServiceAnnouncementRequestBuilderGetQueryParameters } from './serviceAnnouncementRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: ServiceAnnouncementRequestBuilderGetQueryParameters | undefined;
}
