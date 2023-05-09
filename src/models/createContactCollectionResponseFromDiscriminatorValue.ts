import {deserializeIntoContactCollectionResponse} from './deserializeIntoContactCollectionResponse';
import {ContactCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactCollectionResponse;
}
