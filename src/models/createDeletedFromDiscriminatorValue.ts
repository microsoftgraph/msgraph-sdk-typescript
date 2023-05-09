import {deserializeIntoDeleted} from './deserializeIntoDeleted';
import {Deleted} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleted;
}
