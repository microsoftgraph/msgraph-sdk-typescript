import {ProtectedAppLockerFilesRequestBuilderGetQueryParameters} from './protectedAppLockerFilesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProtectedAppLockerFilesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ProtectedAppLockerFilesRequestBuilderGetQueryParameters | undefined;
}
