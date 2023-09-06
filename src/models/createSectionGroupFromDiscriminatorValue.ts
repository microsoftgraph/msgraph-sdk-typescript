import { deserializeIntoSectionGroup } from './deserializeIntoSectionGroup';
import { type SectionGroup } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSectionGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSectionGroup;
}
