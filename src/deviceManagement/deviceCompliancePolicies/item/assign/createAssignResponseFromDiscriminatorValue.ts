import {AssignResponse} from './assignResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignResponse();
}
