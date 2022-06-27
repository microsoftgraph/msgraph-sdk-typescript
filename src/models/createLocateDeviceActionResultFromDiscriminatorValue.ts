import {LocateDeviceActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocateDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocateDeviceActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocateDeviceActionResultImpl();
}
