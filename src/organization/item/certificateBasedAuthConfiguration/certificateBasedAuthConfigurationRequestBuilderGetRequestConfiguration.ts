import {CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters} from './certificateBasedAuthConfigurationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/** Configuration for the request such as headers, query parameters, and middleware options. */
export class CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters | undefined;
}
