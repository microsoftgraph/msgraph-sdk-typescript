import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentityCollectionResponse} from './identityCollectionResponse';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCollectionResponse(identityCollectionResponse: IdentityCollectionResponse | undefined = {} as IdentityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityCollectionResponse),
        "value": n => { identityCollectionResponse.value = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
