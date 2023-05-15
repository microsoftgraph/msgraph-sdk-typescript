import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DriveItemVersion} from './driveItemVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DriveItemVersion[] | undefined;
}
