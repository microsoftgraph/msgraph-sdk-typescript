import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookOperation} from './workbookOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WorkbookOperation[] | undefined;
}
