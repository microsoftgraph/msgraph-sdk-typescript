import {deserializeIntoSchedulingGroupCollectionResponse} from './deserializeIntoSchedulingGroupCollectionResponse';
import {SchedulingGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchedulingGroupCollectionResponse;
}
