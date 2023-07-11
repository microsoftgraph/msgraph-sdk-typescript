import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {DriveItem} from '../../../models/driveItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedWithMeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
