import { deserializeIntoUpdateWindowsDeviceAccountActionParameter } from './deserializeIntoUpdateWindowsDeviceAccountActionParameter';
import { type UpdateWindowsDeviceAccountActionParameter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateWindowsDeviceAccountActionParameter;
}
