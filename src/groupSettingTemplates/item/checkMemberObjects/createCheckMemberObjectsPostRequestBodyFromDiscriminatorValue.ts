import {CheckMemberObjectsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberObjectsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberObjectsPostRequestBodyImpl();
}
