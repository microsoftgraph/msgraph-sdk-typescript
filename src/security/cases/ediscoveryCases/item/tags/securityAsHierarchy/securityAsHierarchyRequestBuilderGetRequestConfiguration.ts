import {SecurityAsHierarchyRequestBuilderGetQueryParameters} from './securityAsHierarchyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecurityAsHierarchyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SecurityAsHierarchyRequestBuilderGetQueryParameters | undefined;
}
