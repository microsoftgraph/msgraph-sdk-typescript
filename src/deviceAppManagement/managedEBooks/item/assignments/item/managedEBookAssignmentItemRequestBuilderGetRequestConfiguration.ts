import {ManagedEBookAssignmentItemRequestBuilderGetQueryParameters} from './managedEBookAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignmentItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ManagedEBookAssignmentItemRequestBuilderGetQueryParameters | undefined;
}
