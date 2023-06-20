import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceCompliancePolicyStateCollectionResponse} from './deviceCompliancePolicyStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyState} from './serializeDeviceCompliancePolicyState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyStateCollectionResponse(deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {} as DeviceCompliancePolicyStateCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("value", deviceCompliancePolicyStateCollectionResponse.value, serializeDeviceCompliancePolicyState);
}
