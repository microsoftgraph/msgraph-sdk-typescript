import {WorkbooksRequestBuilderGetQueryParameters} from './workbooksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkbooksRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:WorkbooksRequestBuilderGetQueryParameters | undefined;
}
