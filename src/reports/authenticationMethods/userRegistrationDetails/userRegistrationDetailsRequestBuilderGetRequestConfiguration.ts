import {UserRegistrationDetailsRequestBuilderGetQueryParameters} from './userRegistrationDetailsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetailsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserRegistrationDetailsRequestBuilderGetQueryParameters | undefined;
}
