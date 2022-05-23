import {DirectoryObjectItemRequestBuilderGetQueryParameters} from './directoryObjectItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DirectoryObjectItemRequestBuilderGetQueryParameters | undefined;
}
