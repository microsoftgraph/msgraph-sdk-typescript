import {RecoveryKeysRequestBuilderGetQueryParameters} from './recoveryKeysRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RecoveryKeysRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:RecoveryKeysRequestBuilderGetQueryParameters | undefined;
}
