import {CustomSecurityAttributeDefinitionsRequestBuilderGetQueryParameters} from './customSecurityAttributeDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: CustomSecurityAttributeDefinitionsRequestBuilderGetQueryParameters | undefined;
}
