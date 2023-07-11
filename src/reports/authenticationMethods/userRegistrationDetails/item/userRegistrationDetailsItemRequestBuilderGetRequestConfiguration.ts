import {UserRegistrationDetailsItemRequestBuilderGetQueryParameters} from './userRegistrationDetailsItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
