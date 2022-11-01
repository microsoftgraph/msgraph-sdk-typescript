import {WindowsInformationProtectionAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionAppCollectionResponse();
}
