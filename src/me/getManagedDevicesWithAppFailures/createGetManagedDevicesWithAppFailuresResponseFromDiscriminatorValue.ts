import {deserializeIntoGetManagedDevicesWithAppFailuresResponse} from './deserializeIntoGetManagedDevicesWithAppFailuresResponse';
import {GetManagedDevicesWithAppFailuresResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetManagedDevicesWithAppFailuresResponse;
}
