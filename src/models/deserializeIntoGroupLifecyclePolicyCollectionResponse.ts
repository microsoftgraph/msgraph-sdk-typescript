import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import type {GroupLifecyclePolicyCollectionResponse} from './groupLifecyclePolicyCollectionResponse';
import {serializeGroupLifecyclePolicy} from './serializeGroupLifecyclePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupLifecyclePolicyCollectionResponse(groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {} as GroupLifecyclePolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupLifecyclePolicyCollectionResponse),
        "value": n => { groupLifecyclePolicyCollectionResponse.value = n.getCollectionOfObjectValues<GroupLifecyclePolicy>(createGroupLifecyclePolicyFromDiscriminatorValue); },
    }
}
