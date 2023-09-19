import { deserializeIntoMacOSDmgAppCollectionResponse } from './deserializeIntoMacOSDmgAppCollectionResponse';
import { type MacOSDmgAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSDmgAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSDmgAppCollectionResponse;
}
