import {DirectoryDefinitionItemRequestBuilderGetQueryParameters} from './directoryDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DirectoryDefinitionItemRequestBuilderGetQueryParameters | undefined;
}
