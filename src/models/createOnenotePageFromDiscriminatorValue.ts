import { deserializeIntoOnenotePage } from './deserializeIntoOnenotePage';
import { type OnenotePage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenotePageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePage;
}
