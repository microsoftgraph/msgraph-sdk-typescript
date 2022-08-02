import {CheckMemberObjectsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberObjectsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberObjectsPostRequestBody();
}
