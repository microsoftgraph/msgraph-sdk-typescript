import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type DeviceConfigurationAssignment } from '../../../../models/deviceConfigurationAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AssignResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationAssignment[] | undefined;
}
