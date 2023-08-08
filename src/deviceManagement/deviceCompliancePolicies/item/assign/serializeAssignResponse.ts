import type {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyAssignment} from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import type {AssignResponse} from './assignResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignResponse(writer: SerializationWriter, assignResponse: AssignResponse | undefined = {} as AssignResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("value", assignResponse.value, serializeDeviceCompliancePolicyAssignment);
}
