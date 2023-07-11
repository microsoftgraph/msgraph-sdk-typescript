import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookTableColumn} from './workbookTableColumn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumnCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookTableColumn[] | undefined;
}
