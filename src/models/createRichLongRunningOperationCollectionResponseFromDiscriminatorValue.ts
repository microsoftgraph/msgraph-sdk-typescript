import {RichLongRunningOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RichLongRunningOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RichLongRunningOperationCollectionResponseImpl();
}
