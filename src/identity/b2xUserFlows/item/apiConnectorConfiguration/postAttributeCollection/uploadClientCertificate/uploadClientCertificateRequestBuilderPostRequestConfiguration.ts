import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UploadClientCertificateRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
