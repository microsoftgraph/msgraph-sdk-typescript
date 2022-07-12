import {PublishResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublishResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : PublishResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublishResponseMember1();
}
