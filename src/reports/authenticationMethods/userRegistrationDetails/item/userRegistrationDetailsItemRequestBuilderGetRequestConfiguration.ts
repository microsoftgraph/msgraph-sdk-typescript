import { type UserRegistrationDetailsItemRequestBuilderGetQueryParameters } from './userRegistrationDetailsItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetailsItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserRegistrationDetailsItemRequestBuilderGetQueryParameters | undefined;
}
