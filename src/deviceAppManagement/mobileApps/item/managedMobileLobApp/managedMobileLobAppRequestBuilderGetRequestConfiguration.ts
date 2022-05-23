import {ManagedMobileLobAppRequestBuilderGetQueryParameters} from './managedMobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobAppRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedMobileLobAppRequestBuilderGetQueryParameters | undefined;
}
