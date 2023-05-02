import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceManagementTroubleshootingEvent[] | undefined;
}
