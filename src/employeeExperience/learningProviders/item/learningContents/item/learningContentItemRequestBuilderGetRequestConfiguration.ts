import {LearningContentItemRequestBuilderGetQueryParameters} from './learningContentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LearningContentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: LearningContentItemRequestBuilderGetQueryParameters | undefined;
}
