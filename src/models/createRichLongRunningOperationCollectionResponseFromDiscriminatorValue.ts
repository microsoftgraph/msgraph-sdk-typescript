import {deserializeIntoRichLongRunningOperationCollectionResponse} from './deserializeIntoRichLongRunningOperationCollectionResponse';
import {RichLongRunningOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRichLongRunningOperationCollectionResponse;
}
