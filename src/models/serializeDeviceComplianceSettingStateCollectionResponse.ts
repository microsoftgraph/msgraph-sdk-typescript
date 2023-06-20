import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateCollectionResponse} from './deviceComplianceSettingStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceSettingState} from './serializeDeviceComplianceSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceSettingStateCollectionResponse(deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {} as DeviceComplianceSettingStateCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceSettingStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingState>("value", deviceComplianceSettingStateCollectionResponse.value, serializeDeviceComplianceSettingState);
}
