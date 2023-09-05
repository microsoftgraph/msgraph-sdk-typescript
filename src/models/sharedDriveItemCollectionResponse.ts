import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SharedDriveItem } from './sharedDriveItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SharedDriveItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SharedDriveItem[] | undefined;
}
