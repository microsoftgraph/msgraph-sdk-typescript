import { type UserAttributeAssignmentsRequestBuilderGetQueryParameters } from './userAttributeAssignmentsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserAttributeAssignmentsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserAttributeAssignmentsRequestBuilderGetQueryParameters | undefined;
}
