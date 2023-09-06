import { type ContactFolderItemRequestBuilderGetQueryParameters } from './contactFolderItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ContactFolderItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ContactFolderItemRequestBuilderGetQueryParameters | undefined;
}
