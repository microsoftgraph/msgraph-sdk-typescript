import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupLifecyclePolicyCollectionResponse} from './groupLifecyclePolicyCollectionResponse';
import {serializeGroupLifecyclePolicy} from './serializeGroupLifecyclePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupLifecyclePolicyCollectionResponse(groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {} as GroupLifecyclePolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupLifecyclePolicyCollectionResponse),
        "value": n => { groupLifecyclePolicyCollectionResponse.value = n.getCollectionOfObjectValues<GroupLifecyclePolicy>(createGroupLifecyclePolicyFromDiscriminatorValue); },
    }
}
