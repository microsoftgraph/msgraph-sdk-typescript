import { type DirectoryAuditItemRequestBuilderGetQueryParameters } from './directoryAuditItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DirectoryAuditItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DirectoryAuditItemRequestBuilderGetQueryParameters | undefined;
}
