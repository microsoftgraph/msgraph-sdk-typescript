import {CancelMediaProcessingResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingResponseMember1();
}
