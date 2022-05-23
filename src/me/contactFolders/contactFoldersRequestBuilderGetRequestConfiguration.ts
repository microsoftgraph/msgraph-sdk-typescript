import {ContactFoldersRequestBuilderGetQueryParameters} from './contactFoldersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContactFoldersRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ContactFoldersRequestBuilderGetQueryParameters | undefined;
}
