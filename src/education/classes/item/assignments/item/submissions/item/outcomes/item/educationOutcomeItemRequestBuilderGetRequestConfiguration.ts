import {EducationOutcomeItemRequestBuilderGetQueryParameters} from './educationOutcomeItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface EducationOutcomeItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationOutcomeItemRequestBuilderGetQueryParameters | undefined;
}
