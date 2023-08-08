import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {LinkedResource} from './linkedResource';
import type {LinkedResourceCollectionResponse} from './linkedResourceCollectionResponse';
import {serializeLinkedResource} from './serializeLinkedResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLinkedResourceCollectionResponse(linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {} as LinkedResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(linkedResourceCollectionResponse),
        "value": n => { linkedResourceCollectionResponse.value = n.getCollectionOfObjectValues<LinkedResource>(createLinkedResourceFromDiscriminatorValue); },
    }
}
