import { deserializeIntoWindowsAppXCollectionResponse } from './deserializeIntoWindowsAppXCollectionResponse';
import { type WindowsAppXCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsAppXCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAppXCollectionResponse;
}
