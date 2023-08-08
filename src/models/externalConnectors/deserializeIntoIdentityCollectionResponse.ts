import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import type {Identity} from './identity';
import type {IdentityCollectionResponse} from './identityCollectionResponse';
import {serializeIdentity} from './serializeIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCollectionResponse(identityCollectionResponse: IdentityCollectionResponse | undefined = {} as IdentityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityCollectionResponse),
        "value": n => { identityCollectionResponse.value = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
