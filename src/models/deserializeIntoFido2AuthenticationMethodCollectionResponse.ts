import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import type {Fido2AuthenticationMethodCollectionResponse} from './fido2AuthenticationMethodCollectionResponse';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodCollectionResponse(fido2AuthenticationMethodCollectionResponse: Fido2AuthenticationMethodCollectionResponse | undefined = {} as Fido2AuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fido2AuthenticationMethodCollectionResponse),
        "value": n => { fido2AuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<Fido2AuthenticationMethod>(createFido2AuthenticationMethodFromDiscriminatorValue); },
    }
}
