import {SchedulingGroupCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchedulingGroupCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchedulingGroupCollectionResponseImpl();
}
