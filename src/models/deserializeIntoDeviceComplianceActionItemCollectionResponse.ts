import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from './deviceComplianceActionItemCollectionResponse';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceActionItemCollectionResponse(deviceComplianceActionItemCollectionResponse: DeviceComplianceActionItemCollectionResponse | undefined = {} as DeviceComplianceActionItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceComplianceActionItemCollectionResponse),
        "value": n => { deviceComplianceActionItemCollectionResponse.value = n.getCollectionOfObjectValues<DeviceComplianceActionItem>(createDeviceComplianceActionItemFromDiscriminatorValue); },
    }
}
