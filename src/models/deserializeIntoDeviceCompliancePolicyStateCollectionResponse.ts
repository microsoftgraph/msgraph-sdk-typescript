import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceCompliancePolicyStateCollectionResponse} from './deviceCompliancePolicyStateCollectionResponse';
import {serializeDeviceCompliancePolicyState} from './serializeDeviceCompliancePolicyState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyStateCollectionResponse(deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {} as DeviceCompliancePolicyStateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyStateCollectionResponse),
        "value": n => { deviceCompliancePolicyStateCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
    }
}
