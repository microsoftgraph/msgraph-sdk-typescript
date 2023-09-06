import { deserializeIntoRelatedContact } from './deserializeIntoRelatedContact';
import { type RelatedContact } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRelatedContactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRelatedContact;
}
