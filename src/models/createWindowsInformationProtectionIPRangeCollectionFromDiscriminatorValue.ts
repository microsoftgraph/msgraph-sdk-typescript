import { deserializeIntoWindowsInformationProtectionIPRangeCollection } from './deserializeIntoWindowsInformationProtectionIPRangeCollection';
import { type WindowsInformationProtectionIPRangeCollection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionIPRangeCollection;
}
