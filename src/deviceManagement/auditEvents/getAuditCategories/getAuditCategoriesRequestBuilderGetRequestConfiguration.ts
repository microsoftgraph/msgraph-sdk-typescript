import { type GetAuditCategoriesRequestBuilderGetQueryParameters } from './getAuditCategoriesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetAuditCategoriesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetAuditCategoriesRequestBuilderGetQueryParameters | undefined;
}
