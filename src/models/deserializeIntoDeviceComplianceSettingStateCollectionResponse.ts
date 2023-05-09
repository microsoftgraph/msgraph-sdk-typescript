import {createDeviceComplianceSettingStateFromDiscriminatorValue} from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateCollectionResponse} from './deviceComplianceSettingStateCollectionResponse';
import {serializeDeviceComplianceSettingState} from './serializeDeviceComplianceSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceSettingStateCollectionResponse(deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {} as DeviceComplianceSettingStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceSettingStateCollectionResponse),
        "value": n => { deviceComplianceSettingStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceSettingState>(createDeviceComplianceSettingStateFromDiscriminatorValue); },
    }
}
