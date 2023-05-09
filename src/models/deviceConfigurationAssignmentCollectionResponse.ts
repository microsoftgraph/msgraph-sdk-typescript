import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceConfigurationAssignment[] | undefined;
}
