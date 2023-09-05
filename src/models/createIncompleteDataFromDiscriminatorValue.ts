import { deserializeIntoIncompleteData } from './deserializeIntoIncompleteData';
import { type IncompleteData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIncompleteDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncompleteData;
}
