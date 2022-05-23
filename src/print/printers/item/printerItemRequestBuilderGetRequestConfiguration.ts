import {PrinterItemRequestBuilderGetQueryParameters} from './printerItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrinterItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:PrinterItemRequestBuilderGetQueryParameters | undefined;
}
