import {createDeviceCompliancePolicyFromDiscriminatorValue} from './createDeviceCompliancePolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyCollectionResponse} from './deviceCompliancePolicyCollectionResponse';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyCollectionResponse(deviceCompliancePolicyCollectionResponse: DeviceCompliancePolicyCollectionResponse | undefined = {} as DeviceCompliancePolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyCollectionResponse),
        "value": n => { deviceCompliancePolicyCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicy>(createDeviceCompliancePolicyFromDiscriminatorValue); },
    }
}
