import {SecureScoresRequestBuilderGetQueryParameters} from './secureScoresRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecureScoresRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SecureScoresRequestBuilderGetQueryParameters | undefined;
}
