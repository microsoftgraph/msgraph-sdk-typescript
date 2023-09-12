import { deserializeIntoSingleUser } from './deserializeIntoSingleUser';
import { type SingleUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSingleUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSingleUser;
}
