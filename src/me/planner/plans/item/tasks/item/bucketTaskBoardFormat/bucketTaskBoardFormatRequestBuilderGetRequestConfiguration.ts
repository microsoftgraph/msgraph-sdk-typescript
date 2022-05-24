import {BucketTaskBoardFormatRequestBuilderGetQueryParameters} from './bucketTaskBoardFormatRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BucketTaskBoardFormatRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:BucketTaskBoardFormatRequestBuilderGetQueryParameters | undefined;
}
