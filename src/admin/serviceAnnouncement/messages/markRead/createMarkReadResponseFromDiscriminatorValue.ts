import {deserializeIntoMarkReadResponse} from './deserializeIntoMarkReadResponse';
import {MarkReadResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkReadResponse;
}
