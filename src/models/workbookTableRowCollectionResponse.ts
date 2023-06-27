import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookTableRow} from './workbookTableRow';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableRowCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookTableRow[] | undefined;
}
