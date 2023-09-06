import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createSetFromDiscriminatorValue } from './createSetFromDiscriminatorValue';
import { serializeSet } from './serializeSet';
import { type Set } from './set';
import { type SetCollectionResponse } from './setCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetCollectionResponse(setCollectionResponse: SetCollectionResponse | undefined = {} as SetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(setCollectionResponse),
        "value": n => { setCollectionResponse.value = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); },
    }
}
