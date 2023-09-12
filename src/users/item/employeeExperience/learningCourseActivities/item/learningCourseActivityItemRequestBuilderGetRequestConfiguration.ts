import { type LearningCourseActivityItemRequestBuilderGetQueryParameters } from './learningCourseActivityItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface LearningCourseActivityItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LearningCourseActivityItemRequestBuilderGetQueryParameters | undefined;
}
