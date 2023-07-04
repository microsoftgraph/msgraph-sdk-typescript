import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrinterShare} from './printerShare';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterShareCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrinterShare[] | undefined;
}
