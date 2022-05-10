import {ServiceUpdateMessageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUpdateMessageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUpdateMessageCollectionResponseImpl();
}
