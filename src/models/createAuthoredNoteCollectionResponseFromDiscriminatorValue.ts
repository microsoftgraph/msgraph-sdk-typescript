import {deserializeIntoAuthoredNoteCollectionResponse} from './deserializeIntoAuthoredNoteCollectionResponse';
import {AuthoredNoteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthoredNoteCollectionResponse;
}
