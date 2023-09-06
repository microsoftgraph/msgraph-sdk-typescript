import { deserializeIntoDeleted } from './deserializeIntoDeleted';
import { type Deleted } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeletedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeleted;
}
