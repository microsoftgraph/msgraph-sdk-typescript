import { type GroupLifecyclePolicy } from './groupLifecyclePolicy';
import { type GroupLifecyclePolicyCollectionResponse } from './groupLifecyclePolicyCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeGroupLifecyclePolicy } from './serializeGroupLifecyclePolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGroupLifecyclePolicyCollectionResponse(writer: SerializationWriter, groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {} as GroupLifecyclePolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupLifecyclePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicy>("value", groupLifecyclePolicyCollectionResponse.value, serializeGroupLifecyclePolicy);
}
