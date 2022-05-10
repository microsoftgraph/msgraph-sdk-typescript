import {RecordResponseRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponseRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponseRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponseRequestBodyImpl();
}
