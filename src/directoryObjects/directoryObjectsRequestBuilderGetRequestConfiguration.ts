import {DirectoryObjectsRequestBuilderGetQueryParameters} from './directoryObjectsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DirectoryObjectsRequestBuilderGetQueryParameters | undefined;
}
