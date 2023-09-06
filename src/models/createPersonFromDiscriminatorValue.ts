import { deserializeIntoPerson } from './deserializeIntoPerson';
import { type Person } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPersonFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPerson;
}
