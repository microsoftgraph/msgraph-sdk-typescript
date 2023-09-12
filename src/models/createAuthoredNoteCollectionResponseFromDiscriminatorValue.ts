import { deserializeIntoAuthoredNoteCollectionResponse } from './deserializeIntoAuthoredNoteCollectionResponse';
import { type AuthoredNoteCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthoredNoteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthoredNoteCollectionResponse;
}
