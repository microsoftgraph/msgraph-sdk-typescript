import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DriveItemVersion } from './driveItemVersion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DriveItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItemVersion[] | undefined;
}
