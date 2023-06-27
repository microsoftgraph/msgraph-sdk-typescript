import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintUsageByPrinter[] | undefined;
}
