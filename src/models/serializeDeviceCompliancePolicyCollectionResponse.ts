import { type DeviceCompliancePolicy } from './deviceCompliancePolicy';
import { type DeviceCompliancePolicyCollectionResponse } from './deviceCompliancePolicyCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceCompliancePolicy } from './serializeDeviceCompliancePolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyCollectionResponse: DeviceCompliancePolicyCollectionResponse | undefined = {} as DeviceCompliancePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicy>("value", deviceCompliancePolicyCollectionResponse.value, serializeDeviceCompliancePolicy);
}
