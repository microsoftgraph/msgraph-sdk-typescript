import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookNamedItem } from './workbookNamedItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookNamedItem[] | undefined;
}
