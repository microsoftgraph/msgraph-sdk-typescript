import { deserializeIntoList } from './deserializeIntoList';
import { type List } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoList;
}
