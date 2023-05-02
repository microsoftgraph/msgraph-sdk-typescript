import {createSchedulingGroupFromDiscriminatorValue} from './createSchedulingGroupFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {SchedulingGroup} from './schedulingGroup';
import {SchedulingGroupCollectionResponse} from './schedulingGroupCollectionResponse';
import {serializeSchedulingGroup} from './serializeSchedulingGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedulingGroupCollectionResponse(schedulingGroupCollectionResponse: SchedulingGroupCollectionResponse | undefined = {} as SchedulingGroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(schedulingGroupCollectionResponse),
        "value": n => { schedulingGroupCollectionResponse.value = n.getCollectionOfObjectValues<SchedulingGroup>(createSchedulingGroupFromDiscriminatorValue); },
    }
}
