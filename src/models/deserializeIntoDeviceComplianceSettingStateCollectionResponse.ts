import { createDeviceComplianceSettingStateFromDiscriminatorValue } from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceComplianceSettingState } from './deviceComplianceSettingState';
import { type DeviceComplianceSettingStateCollectionResponse } from './deviceComplianceSettingStateCollectionResponse';
import { serializeDeviceComplianceSettingState } from './serializeDeviceComplianceSettingState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceSettingStateCollectionResponse(deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {} as DeviceComplianceSettingStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceSettingStateCollectionResponse),
        "value": n => { deviceComplianceSettingStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceSettingState>(createDeviceComplianceSettingStateFromDiscriminatorValue); },
    }
}
