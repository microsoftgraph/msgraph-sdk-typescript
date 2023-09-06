import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PrinterShare } from './printerShare';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrinterShareCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrinterShare[] | undefined;
}
