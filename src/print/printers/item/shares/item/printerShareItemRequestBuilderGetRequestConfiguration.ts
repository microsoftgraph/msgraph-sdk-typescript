import {PrinterShareItemRequestBuilderGetQueryParameters} from './printerShareItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrinterShareItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PrinterShareItemRequestBuilderGetQueryParameters | undefined;
}
