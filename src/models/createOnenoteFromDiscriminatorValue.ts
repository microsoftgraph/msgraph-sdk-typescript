import {deserializeIntoOnenote} from './deserializeIntoOnenote';
import {Onenote} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenote;
}
