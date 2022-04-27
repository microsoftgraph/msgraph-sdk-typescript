import {RichLongRunningOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RichLongRunningOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RichLongRunningOperationCollectionResponse();
}
