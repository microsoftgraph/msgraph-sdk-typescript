import {OnenoteOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperationCollectionResponseImpl();
}
