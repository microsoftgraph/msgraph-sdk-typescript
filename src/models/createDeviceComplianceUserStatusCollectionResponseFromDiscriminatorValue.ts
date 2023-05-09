import {deserializeIntoDeviceComplianceUserStatusCollectionResponse} from './deserializeIntoDeviceComplianceUserStatusCollectionResponse';
import {DeviceComplianceUserStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceUserStatusCollectionResponse;
}
