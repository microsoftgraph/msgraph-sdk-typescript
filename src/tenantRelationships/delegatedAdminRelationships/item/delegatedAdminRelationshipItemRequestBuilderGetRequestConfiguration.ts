import {DelegatedAdminRelationshipItemRequestBuilderGetQueryParameters} from './delegatedAdminRelationshipItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: DelegatedAdminRelationshipItemRequestBuilderGetQueryParameters | undefined;
}
