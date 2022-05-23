import {AuthoredNoteCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthoredNoteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthoredNoteCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthoredNoteCollectionResponseImpl();
}
