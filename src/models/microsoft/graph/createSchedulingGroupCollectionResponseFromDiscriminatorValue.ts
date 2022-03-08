import {SchedulingGroupCollectionResponse} from './schedulingGroupCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchedulingGroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchedulingGroupCollectionResponse();
}
