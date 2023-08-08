import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WorkbookOperation} from './workbookOperation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookOperation[] | undefined;
}
