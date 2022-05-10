import {ExternalConnectionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalConnectionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalConnectionCollectionResponseImpl();
}
