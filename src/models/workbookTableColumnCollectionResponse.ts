import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WorkbookTableColumn} from './workbookTableColumn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookTableColumnCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookTableColumn[] | undefined;
}
