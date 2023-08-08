import {CertificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters} from './certificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CertificateBasedAuthConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CertificateBasedAuthConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
