import {UpdateRecordingStatusOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusOperationCollectionResponse();
}
