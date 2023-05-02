import {IncompatibleAccessPackagesRequestBuilderGetQueryParameters} from './incompatibleAccessPackagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IncompatibleAccessPackagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: IncompatibleAccessPackagesRequestBuilderGetQueryParameters | undefined;
}
