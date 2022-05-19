import {RecordResponsePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponsePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponsePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponsePostRequestBody();
}
