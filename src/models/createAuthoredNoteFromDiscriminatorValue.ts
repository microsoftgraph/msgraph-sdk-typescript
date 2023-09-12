import { deserializeIntoAuthoredNote } from './deserializeIntoAuthoredNote';
import { type AuthoredNote } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthoredNoteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthoredNote;
}
