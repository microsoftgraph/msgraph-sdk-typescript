import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssignResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationAssignment[] | undefined;
}
