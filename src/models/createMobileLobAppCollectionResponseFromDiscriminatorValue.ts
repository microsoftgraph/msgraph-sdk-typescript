import {MobileLobAppCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileLobAppCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileLobAppCollectionResponseImpl();
}
