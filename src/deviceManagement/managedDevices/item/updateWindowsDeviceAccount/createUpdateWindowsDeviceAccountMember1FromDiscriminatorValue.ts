import {UpdateWindowsDeviceAccountMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountMember1();
}
