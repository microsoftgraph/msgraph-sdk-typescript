import {WindowsUniversalAppXCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppXCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppXCollectionResponse();
}
