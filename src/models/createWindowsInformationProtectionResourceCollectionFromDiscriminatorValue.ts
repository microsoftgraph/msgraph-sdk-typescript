import {deserializeIntoWindowsInformationProtectionResourceCollection} from './deserializeIntoWindowsInformationProtectionResourceCollection';
import {WindowsInformationProtectionResourceCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionResourceCollection;
}
