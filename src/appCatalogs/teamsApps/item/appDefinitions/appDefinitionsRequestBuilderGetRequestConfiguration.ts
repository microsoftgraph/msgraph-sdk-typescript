import {AppDefinitionsRequestBuilderGetQueryParameters} from './appDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppDefinitionsRequestBuilderGetQueryParameters | undefined;
}
