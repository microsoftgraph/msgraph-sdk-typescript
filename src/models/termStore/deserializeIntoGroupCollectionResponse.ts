import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import type {Group} from './group';
import type {GroupCollectionResponse} from './groupCollectionResponse';
import {serializeGroup} from './serializeGroup';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupCollectionResponse(groupCollectionResponse: GroupCollectionResponse | undefined = {} as GroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupCollectionResponse),
        "value": n => { groupCollectionResponse.value = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
    }
}
