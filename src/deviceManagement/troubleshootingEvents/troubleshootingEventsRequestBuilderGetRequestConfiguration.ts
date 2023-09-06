import { type TroubleshootingEventsRequestBuilderGetQueryParameters } from './troubleshootingEventsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TroubleshootingEventsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TroubleshootingEventsRequestBuilderGetQueryParameters | undefined;
}
