import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceCompliancePolicyStateCollectionResponse} from './deviceCompliancePolicyStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyState} from './serializeDeviceCompliancePolicyState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyStateCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {} as DeviceCompliancePolicyStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("value", deviceCompliancePolicyStateCollectionResponse.value, serializeDeviceCompliancePolicyState);
}
