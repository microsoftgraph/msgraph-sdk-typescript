import { type DeviceComplianceSettingState } from './deviceComplianceSettingState';
import { type DeviceComplianceSettingStateCollectionResponse } from './deviceComplianceSettingStateCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceComplianceSettingState } from './serializeDeviceComplianceSettingState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceSettingStateCollectionResponse(writer: SerializationWriter, deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {} as DeviceComplianceSettingStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceSettingStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingState>("value", deviceComplianceSettingStateCollectionResponse.value, serializeDeviceComplianceSettingState);
}
