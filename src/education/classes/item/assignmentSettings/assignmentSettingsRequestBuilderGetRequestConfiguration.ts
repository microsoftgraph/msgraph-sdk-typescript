import {AssignmentSettingsRequestBuilderGetQueryParameters} from './assignmentSettingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssignmentSettingsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentSettingsRequestBuilderGetQueryParameters | undefined;
}
