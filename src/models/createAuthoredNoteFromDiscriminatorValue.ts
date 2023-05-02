import {deserializeIntoAuthoredNote} from './deserializeIntoAuthoredNote';
import {AuthoredNote} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthoredNote;
}
