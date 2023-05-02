import {EffectiveRulesRequestBuilderGetQueryParameters} from './effectiveRulesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EffectiveRulesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: EffectiveRulesRequestBuilderGetQueryParameters | undefined;
}
