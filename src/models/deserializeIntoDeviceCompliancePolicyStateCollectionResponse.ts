import { createDeviceCompliancePolicyStateFromDiscriminatorValue } from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceCompliancePolicyState } from './deviceCompliancePolicyState';
import { type DeviceCompliancePolicyStateCollectionResponse } from './deviceCompliancePolicyStateCollectionResponse';
import { serializeDeviceCompliancePolicyState } from './serializeDeviceCompliancePolicyState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyStateCollectionResponse(deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {} as DeviceCompliancePolicyStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyStateCollectionResponse),
        "value": n => { deviceCompliancePolicyStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
    }
}
