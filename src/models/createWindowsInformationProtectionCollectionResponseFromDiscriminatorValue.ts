import {WindowsInformationProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionCollectionResponse();
}
