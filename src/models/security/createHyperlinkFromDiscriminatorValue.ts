import { deserializeIntoHyperlink } from './deserializeIntoHyperlink';
import { type Hyperlink } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHyperlinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlink;
}
