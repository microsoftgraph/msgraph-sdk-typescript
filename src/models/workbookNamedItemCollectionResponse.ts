import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookNamedItem} from './workbookNamedItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookNamedItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WorkbookNamedItem[] | undefined;
}
