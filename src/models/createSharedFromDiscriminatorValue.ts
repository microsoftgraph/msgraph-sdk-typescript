import { deserializeIntoShared } from './deserializeIntoShared';
import { type Shared } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoShared;
}
