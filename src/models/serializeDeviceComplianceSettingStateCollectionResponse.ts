import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateCollectionResponse} from './deviceComplianceSettingStateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceSettingState} from './serializeDeviceComplianceSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceSettingStateCollectionResponse(writer: SerializationWriter, deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {} as DeviceComplianceSettingStateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceSettingStateCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingState>("value", deviceComplianceSettingStateCollectionResponse.value, serializeDeviceComplianceSettingState);
}
