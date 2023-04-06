import {WindowsAppXCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAppXCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsAppXCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsAppXCollectionResponse();
}
