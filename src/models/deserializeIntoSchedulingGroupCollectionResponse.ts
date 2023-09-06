import { createSchedulingGroupFromDiscriminatorValue } from './createSchedulingGroupFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type SchedulingGroup } from './schedulingGroup';
import { type SchedulingGroupCollectionResponse } from './schedulingGroupCollectionResponse';
import { serializeSchedulingGroup } from './serializeSchedulingGroup';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedulingGroupCollectionResponse(schedulingGroupCollectionResponse: SchedulingGroupCollectionResponse | undefined = {} as SchedulingGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(schedulingGroupCollectionResponse),
        "value": n => { schedulingGroupCollectionResponse.value = n.getCollectionOfObjectValues<SchedulingGroup>(createSchedulingGroupFromDiscriminatorValue); },
    }
}
