import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupLifecyclePolicyCollectionResponse} from './groupLifecyclePolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupLifecyclePolicy} from './serializeGroupLifecyclePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupLifecyclePolicyCollectionResponse(groupLifecyclePolicyCollectionResponse: GroupLifecyclePolicyCollectionResponse | undefined = {} as GroupLifecyclePolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupLifecyclePolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicy>("value", groupLifecyclePolicyCollectionResponse.value, serializeGroupLifecyclePolicy);
}
