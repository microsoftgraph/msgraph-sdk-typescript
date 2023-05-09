import {MobileAppAssignmentItemRequestBuilderGetQueryParameters} from './mobileAppAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignmentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: MobileAppAssignmentItemRequestBuilderGetQueryParameters | undefined;
}
