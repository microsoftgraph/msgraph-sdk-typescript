import {PlaceItemRequestBuilderGetQueryParameters} from './placeItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlaceItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:PlaceItemRequestBuilderGetQueryParameters | undefined;
}
