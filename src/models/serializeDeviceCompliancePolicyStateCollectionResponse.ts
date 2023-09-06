import { type DeviceCompliancePolicyState } from './deviceCompliancePolicyState';
import { type DeviceCompliancePolicyStateCollectionResponse } from './deviceCompliancePolicyStateCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceCompliancePolicyState } from './serializeDeviceCompliancePolicyState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyStateCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {} as DeviceCompliancePolicyStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("value", deviceCompliancePolicyStateCollectionResponse.value, serializeDeviceCompliancePolicyState);
}
