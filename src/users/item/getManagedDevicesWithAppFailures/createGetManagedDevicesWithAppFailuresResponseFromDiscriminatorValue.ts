import { deserializeIntoGetManagedDevicesWithAppFailuresResponse } from './deserializeIntoGetManagedDevicesWithAppFailuresResponse';
import { type GetManagedDevicesWithAppFailuresResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetManagedDevicesWithAppFailuresResponse;
}
