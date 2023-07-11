import {CustomSecurityAttributeDefinitionsRequestBuilderGetQueryParameters} from './customSecurityAttributeDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomSecurityAttributeDefinitionsRequestBuilderGetQueryParameters | undefined;
}
