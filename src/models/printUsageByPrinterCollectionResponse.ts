import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PrintUsageByPrinter } from './printUsageByPrinter';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintUsageByPrinter[] | undefined;
}
