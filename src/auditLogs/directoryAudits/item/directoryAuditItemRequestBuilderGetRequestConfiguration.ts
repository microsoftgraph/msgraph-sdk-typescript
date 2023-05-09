import {DirectoryAuditItemRequestBuilderGetQueryParameters} from './directoryAuditItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DirectoryAuditItemRequestBuilderGetQueryParameters | undefined;
}
