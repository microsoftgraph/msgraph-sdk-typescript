import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {RecentNotebook} from '../../../../models/recentNotebook';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetRecentNotebooksWithIncludePersonalNotebooksResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RecentNotebook[] | undefined;
}
