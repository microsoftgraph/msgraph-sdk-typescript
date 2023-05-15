import {deserializeIntoNamedLocationCollectionResponse} from './deserializeIntoNamedLocationCollectionResponse';
import {NamedLocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNamedLocationCollectionResponse;
}
