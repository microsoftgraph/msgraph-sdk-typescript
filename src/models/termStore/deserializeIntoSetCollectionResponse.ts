import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {serializeSet} from './serializeSet';
import {Set} from './set';
import {SetCollectionResponse} from './setCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetCollectionResponse(setCollectionResponse: SetCollectionResponse | undefined = {} as SetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(setCollectionResponse),
        "value": n => { setCollectionResponse.value = n.getCollectionOfObjectValues<Set>(createSetFromDiscriminatorValue); },
    }
}
