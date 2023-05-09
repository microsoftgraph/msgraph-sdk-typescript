import {deserializeIntoExternalItemCollectionResponse} from './deserializeIntoExternalItemCollectionResponse';
import {ExternalItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalItemCollectionResponse;
}
