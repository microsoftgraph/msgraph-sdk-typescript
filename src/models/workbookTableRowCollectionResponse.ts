import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookTableRow } from './workbookTableRow';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookTableRowCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookTableRow[] | undefined;
}
