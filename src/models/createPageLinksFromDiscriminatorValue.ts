import { deserializeIntoPageLinks } from './deserializeIntoPageLinks';
import { type PageLinks } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPageLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPageLinks;
}
