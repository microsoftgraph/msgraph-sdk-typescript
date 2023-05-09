import {deserializeIntoRecordResponsePostRequestBody} from './deserializeIntoRecordResponsePostRequestBody';
import {RecordResponsePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponsePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecordResponsePostRequestBody;
}
