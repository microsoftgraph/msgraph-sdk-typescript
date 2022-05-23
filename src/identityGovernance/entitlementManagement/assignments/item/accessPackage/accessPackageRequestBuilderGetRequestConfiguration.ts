import {AccessPackageRequestBuilderGetQueryParameters} from './accessPackageRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:AccessPackageRequestBuilderGetQueryParameters | undefined;
}
