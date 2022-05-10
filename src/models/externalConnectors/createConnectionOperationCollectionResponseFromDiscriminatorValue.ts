import {ConnectionOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionOperationCollectionResponseImpl();
}
