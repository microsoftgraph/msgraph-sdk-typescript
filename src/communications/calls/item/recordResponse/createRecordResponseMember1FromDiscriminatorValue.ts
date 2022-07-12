import {RecordResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponseMember1();
}
