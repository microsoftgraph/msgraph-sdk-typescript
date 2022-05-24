import {ParentNotebookRequestBuilderGetQueryParameters} from './parentNotebookRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentNotebookRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ParentNotebookRequestBuilderGetQueryParameters | undefined;
}
