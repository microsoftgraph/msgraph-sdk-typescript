import {RecordResponseResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponseResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponseResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponseResponseMember1();
}
