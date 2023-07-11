import {CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters} from './certificateBasedAuthConfigurationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters | undefined;
}
