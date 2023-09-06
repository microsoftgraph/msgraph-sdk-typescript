import { deserializeIntoContact } from './deserializeIntoContact';
import { type Contact } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContact;
}
