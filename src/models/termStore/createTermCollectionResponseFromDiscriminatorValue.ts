import {deserializeIntoTermCollectionResponse} from './deserializeIntoTermCollectionResponse';
import {TermCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermCollectionResponse;
}
