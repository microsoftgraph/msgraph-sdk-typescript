import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DriveItem} from './driveItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
