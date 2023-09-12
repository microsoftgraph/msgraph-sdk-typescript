import { type CustomQuestionsRequestBuilderGetQueryParameters } from './customQuestionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CustomQuestionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomQuestionsRequestBuilderGetQueryParameters | undefined;
}
