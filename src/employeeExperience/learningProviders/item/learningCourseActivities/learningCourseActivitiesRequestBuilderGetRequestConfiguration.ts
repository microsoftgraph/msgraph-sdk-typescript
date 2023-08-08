import {LearningCourseActivitiesRequestBuilderGetQueryParameters} from './learningCourseActivitiesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface LearningCourseActivitiesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LearningCourseActivitiesRequestBuilderGetQueryParameters | undefined;
}
