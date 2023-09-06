import { deserializeIntoOnenoteSection } from './deserializeIntoOnenoteSection';
import { type OnenoteSection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteSection;
}
