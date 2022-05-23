import {DefaultManagedAppProtectionsRequestBuilderGetQueryParameters} from './defaultManagedAppProtectionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DefaultManagedAppProtectionsRequestBuilderGetQueryParameters | undefined;
}
