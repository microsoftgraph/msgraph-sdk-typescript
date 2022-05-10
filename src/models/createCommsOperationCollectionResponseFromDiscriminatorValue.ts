import {CommsOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommsOperationCollectionResponseImpl();
}
