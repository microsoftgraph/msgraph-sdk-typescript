import type {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import type {RecentNotebook} from '../../../../../models/recentNotebook';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetRecentNotebooksWithIncludePersonalNotebooksResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RecentNotebook[] | undefined;
}
