import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Notebook } from './notebook';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface NotebookCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Notebook[] | undefined;
}
