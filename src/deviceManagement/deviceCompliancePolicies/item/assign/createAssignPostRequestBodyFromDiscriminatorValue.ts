import {AssignPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignPostRequestBody();
}
