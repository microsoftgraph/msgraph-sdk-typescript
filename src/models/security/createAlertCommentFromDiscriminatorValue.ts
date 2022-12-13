import {AlertComment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertComment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertComment();
}
