import {NotebooksRequestBuilderGetQueryParameters} from './notebooksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotebooksRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:NotebooksRequestBuilderGetQueryParameters | undefined;
}
