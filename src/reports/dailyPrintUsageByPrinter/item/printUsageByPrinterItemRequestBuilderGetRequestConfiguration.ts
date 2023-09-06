import { type PrintUsageByPrinterItemRequestBuilderGetQueryParameters } from './printUsageByPrinterItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinterItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PrintUsageByPrinterItemRequestBuilderGetQueryParameters | undefined;
}
