import { type ShiftPreferencesRequestBuilderGetQueryParameters } from './shiftPreferencesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ShiftPreferencesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ShiftPreferencesRequestBuilderGetQueryParameters | undefined;
}
