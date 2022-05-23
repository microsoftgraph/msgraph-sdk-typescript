import {ExternalItemCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItemCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItemCollectionResponseImpl();
}
