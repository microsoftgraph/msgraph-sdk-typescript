import { type GetAllMessagesRequestBuilderGetQueryParameters } from './getAllMessagesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetAllMessagesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetAllMessagesRequestBuilderGetQueryParameters | undefined;
}
