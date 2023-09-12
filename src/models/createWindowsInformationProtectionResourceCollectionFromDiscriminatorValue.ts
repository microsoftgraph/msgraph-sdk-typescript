import { deserializeIntoWindowsInformationProtectionResourceCollection } from './deserializeIntoWindowsInformationProtectionResourceCollection';
import { type WindowsInformationProtectionResourceCollection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionResourceCollection;
}
