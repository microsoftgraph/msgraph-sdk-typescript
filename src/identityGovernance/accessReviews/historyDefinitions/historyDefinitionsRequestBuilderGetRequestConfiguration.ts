import {HistoryDefinitionsRequestBuilderGetQueryParameters} from './historyDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HistoryDefinitionsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:HistoryDefinitionsRequestBuilderGetQueryParameters | undefined;
}
