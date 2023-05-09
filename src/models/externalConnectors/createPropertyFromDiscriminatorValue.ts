import {deserializeIntoProperty} from './deserializeIntoProperty';
import {Property} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProperty;
}
