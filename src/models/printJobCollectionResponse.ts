import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintJob} from './printJob';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJobCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintJob[] | undefined;
}
