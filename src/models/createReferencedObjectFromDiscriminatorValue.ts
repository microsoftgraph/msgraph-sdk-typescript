import {deserializeIntoReferencedObject} from './deserializeIntoReferencedObject';
import {ReferencedObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferencedObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReferencedObject;
}
