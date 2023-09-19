import { deserializeIntoWindowsMobileMSICollectionResponse } from './deserializeIntoWindowsMobileMSICollectionResponse';
import { type WindowsMobileMSICollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSICollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsMobileMSICollectionResponse;
}
