import {RecordOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordOperationCollectionResponse();
}
