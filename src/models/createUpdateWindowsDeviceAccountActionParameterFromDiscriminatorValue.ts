import {UpdateWindowsDeviceAccountActionParameterImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountActionParameterImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountActionParameterImpl();
}
