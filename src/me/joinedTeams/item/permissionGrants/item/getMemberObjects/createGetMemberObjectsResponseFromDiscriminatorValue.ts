import {deserializeIntoGetMemberObjectsResponse} from './deserializeIntoGetMemberObjectsResponse';
import {GetMemberObjectsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberObjectsResponse;
}
