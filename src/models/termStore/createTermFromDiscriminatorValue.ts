import {deserializeIntoTerm} from './deserializeIntoTerm';
import {Term} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTerm;
}
