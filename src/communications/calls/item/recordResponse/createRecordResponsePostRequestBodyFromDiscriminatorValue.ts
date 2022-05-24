import {RecordResponsePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponsePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponsePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponsePostRequestBodyImpl();
}
