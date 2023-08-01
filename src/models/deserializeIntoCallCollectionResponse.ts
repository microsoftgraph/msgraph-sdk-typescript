import type {Call} from './call';
import type {CallCollectionResponse} from './callCollectionResponse';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallCollectionResponse(callCollectionResponse: CallCollectionResponse | undefined = {} as CallCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(callCollectionResponse),
        "value": n => { callCollectionResponse.value = n.getCollectionOfObjectValues<Call>(createCallFromDiscriminatorValue); },
    }
}
