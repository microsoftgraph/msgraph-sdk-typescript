import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Notebook} from './notebook';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotebookCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Notebook[] | undefined;
}
