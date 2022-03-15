import {DeviceComplianceUserStatusCollectionResponse} from './deviceComplianceUserStatusCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceUserStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceUserStatusCollectionResponse();
}
