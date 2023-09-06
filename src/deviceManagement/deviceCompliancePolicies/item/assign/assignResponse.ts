import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type DeviceCompliancePolicyAssignment } from '../../../../models/deviceCompliancePolicyAssignment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AssignResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicyAssignment[] | undefined;
}
