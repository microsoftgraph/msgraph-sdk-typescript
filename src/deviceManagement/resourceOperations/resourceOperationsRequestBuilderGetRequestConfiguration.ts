import {ResourceOperationsRequestBuilderGetQueryParameters} from './resourceOperationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceOperationsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ResourceOperationsRequestBuilderGetQueryParameters | undefined;
}
