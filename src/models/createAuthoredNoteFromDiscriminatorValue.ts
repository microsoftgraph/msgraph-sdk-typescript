import {AuthoredNoteImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthoredNoteImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthoredNoteImpl();
}
