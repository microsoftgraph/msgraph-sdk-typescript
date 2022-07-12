import {AddToReviewSetMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddToReviewSetMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddToReviewSetMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddToReviewSetMember1();
}
