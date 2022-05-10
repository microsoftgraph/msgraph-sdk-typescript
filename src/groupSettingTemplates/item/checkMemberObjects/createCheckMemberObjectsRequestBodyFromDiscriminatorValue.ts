import {CheckMemberObjectsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberObjectsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberObjectsRequestBodyImpl();
}
