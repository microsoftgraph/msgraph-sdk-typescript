import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Printer} from './printer';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Printer[] | undefined;
}
