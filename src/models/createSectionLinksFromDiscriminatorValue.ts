import { deserializeIntoSectionLinks } from './deserializeIntoSectionLinks';
import { type SectionLinks } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSectionLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSectionLinks;
}
