import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DriveItem} from './driveItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
