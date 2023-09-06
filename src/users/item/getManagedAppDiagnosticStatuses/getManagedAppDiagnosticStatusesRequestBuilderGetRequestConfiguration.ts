import { type GetManagedAppDiagnosticStatusesRequestBuilderGetQueryParameters } from './getManagedAppDiagnosticStatusesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetManagedAppDiagnosticStatusesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetManagedAppDiagnosticStatusesRequestBuilderGetQueryParameters | undefined;
}
