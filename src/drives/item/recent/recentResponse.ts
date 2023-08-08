import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {DriveItem} from '../../../models/driveItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RecentResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
