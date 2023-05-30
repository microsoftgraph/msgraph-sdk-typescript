import {deserializeIntoExternalActivityCollectionResponse} from './deserializeIntoExternalActivityCollectionResponse';
import {ExternalActivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalActivityCollectionResponse;
}
