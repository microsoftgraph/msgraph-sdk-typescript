import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookComment} from './workbookComment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookComment[] | undefined;
}
