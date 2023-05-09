import {deserializeIntoEventCollectionResponse} from './deserializeIntoEventCollectionResponse';
import {EventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventCollectionResponse;
}
