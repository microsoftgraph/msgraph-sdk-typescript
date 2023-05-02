import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {Group} from './group';
import {GroupCollectionResponse} from './groupCollectionResponse';
import {serializeGroup} from './serializeGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupCollectionResponse(groupCollectionResponse: GroupCollectionResponse | undefined = {} as GroupCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupCollectionResponse),
        "value": n => { groupCollectionResponse.value = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
    }
}
