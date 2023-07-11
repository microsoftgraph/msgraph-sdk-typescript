import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SharedDriveItem} from './sharedDriveItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedDriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SharedDriveItem[] | undefined;
}
