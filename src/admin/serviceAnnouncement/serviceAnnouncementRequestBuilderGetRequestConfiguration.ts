import {ServiceAnnouncementRequestBuilderGetQueryParameters} from './serviceAnnouncementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ServiceAnnouncementRequestBuilderGetQueryParameters | undefined;
}
