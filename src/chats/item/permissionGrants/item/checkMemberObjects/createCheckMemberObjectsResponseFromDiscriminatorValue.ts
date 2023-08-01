import {deserializeIntoCheckMemberObjectsResponse} from './deserializeIntoCheckMemberObjectsResponse';
import {CheckMemberObjectsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberObjectsResponse;
}
