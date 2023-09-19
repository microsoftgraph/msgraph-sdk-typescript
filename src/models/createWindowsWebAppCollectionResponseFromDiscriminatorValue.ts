import { deserializeIntoWindowsWebAppCollectionResponse } from './deserializeIntoWindowsWebAppCollectionResponse';
import { type WindowsWebAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsWebAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsWebAppCollectionResponse;
}
