import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintDocument} from './printDocument';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocumentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintDocument[] | undefined;
}
