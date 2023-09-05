import { type SupportedLanguagesRequestBuilderGetQueryParameters } from './supportedLanguagesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface SupportedLanguagesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SupportedLanguagesRequestBuilderGetQueryParameters | undefined;
}
