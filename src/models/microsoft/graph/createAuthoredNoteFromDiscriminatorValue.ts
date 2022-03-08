import {AuthoredNote} from './authoredNote';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthoredNote {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthoredNote();
}
