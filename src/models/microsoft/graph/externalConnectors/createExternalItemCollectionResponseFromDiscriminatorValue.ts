import {ExternalItemCollectionResponse} from './externalItemCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItemCollectionResponse();
}
