import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintDocument} from './printDocument';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocumentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintDocument[] | undefined;
}
