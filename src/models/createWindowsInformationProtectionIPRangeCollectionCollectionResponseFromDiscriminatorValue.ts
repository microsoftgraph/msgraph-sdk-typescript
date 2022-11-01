import {WindowsInformationProtectionIPRangeCollectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionIPRangeCollectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionIPRangeCollectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionIPRangeCollectionCollectionResponse();
}
