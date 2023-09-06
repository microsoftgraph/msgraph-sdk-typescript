import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookComment } from './workbookComment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookCommentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookComment[] | undefined;
}
