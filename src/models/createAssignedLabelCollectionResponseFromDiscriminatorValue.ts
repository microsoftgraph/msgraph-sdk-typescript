import {AssignedLabelCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLabelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedLabelCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedLabelCollectionResponse();
}
