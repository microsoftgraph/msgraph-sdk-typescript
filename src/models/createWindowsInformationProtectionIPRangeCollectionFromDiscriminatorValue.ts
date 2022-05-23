import {WindowsInformationProtectionIPRangeCollectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionIPRangeCollectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionIPRangeCollectionImpl();
}
