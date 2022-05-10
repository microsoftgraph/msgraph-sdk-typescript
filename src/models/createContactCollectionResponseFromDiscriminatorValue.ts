import {ContactCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactCollectionResponseImpl();
}
