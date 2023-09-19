import { deserializeIntoWindowsUniversalAppXCollectionResponse } from './deserializeIntoWindowsUniversalAppXCollectionResponse';
import { type WindowsUniversalAppXCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppXCollectionResponse;
}
