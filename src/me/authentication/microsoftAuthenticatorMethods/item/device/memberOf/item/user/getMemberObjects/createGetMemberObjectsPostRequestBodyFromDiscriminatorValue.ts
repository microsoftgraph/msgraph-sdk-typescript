import {GetMemberObjectsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberObjectsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberObjectsPostRequestBodyImpl();
}
