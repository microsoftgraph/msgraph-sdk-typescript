import {GetManagedDevicesWithAppFailuresResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedDevicesWithAppFailuresResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedDevicesWithAppFailuresResponse();
}
