import {AppCatalogsRequestBuilderGetQueryParameters} from './appCatalogsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppCatalogsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppCatalogsRequestBuilderGetQueryParameters | undefined;
}
