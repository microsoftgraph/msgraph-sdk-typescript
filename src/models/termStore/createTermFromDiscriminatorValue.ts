import { deserializeIntoTerm } from './deserializeIntoTerm';
import { type Term } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTerm;
}
