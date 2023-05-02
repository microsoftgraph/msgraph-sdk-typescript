import {OnenoteRequestBuilderGetQueryParameters} from './onenoteRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OnenoteRequestBuilderGetQueryParameters | undefined;
}
