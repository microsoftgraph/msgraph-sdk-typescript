import {GetMemberObjectsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberObjectsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberObjectsRequestBodyImpl();
}
