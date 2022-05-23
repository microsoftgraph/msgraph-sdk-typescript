import {SegmentItemRequestBuilderGetQueryParameters} from './segmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SegmentItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SegmentItemRequestBuilderGetQueryParameters | undefined;
}
