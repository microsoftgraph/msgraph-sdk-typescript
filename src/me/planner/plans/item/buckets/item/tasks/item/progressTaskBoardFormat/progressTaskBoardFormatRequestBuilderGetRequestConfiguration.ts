import {ProgressTaskBoardFormatRequestBuilderGetQueryParameters} from './progressTaskBoardFormatRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProgressTaskBoardFormatRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ProgressTaskBoardFormatRequestBuilderGetQueryParameters | undefined;
}
