import {NamedLocationsRequestBuilderGetQueryParameters} from './namedLocationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NamedLocationsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:NamedLocationsRequestBuilderGetQueryParameters | undefined;
}
