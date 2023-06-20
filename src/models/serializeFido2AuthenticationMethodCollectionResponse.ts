import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {Fido2AuthenticationMethodCollectionResponse} from './fido2AuthenticationMethodCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethodCollectionResponse(fido2AuthenticationMethodCollectionResponse: Fido2AuthenticationMethodCollectionResponse | undefined = {} as Fido2AuthenticationMethodCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fido2AuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethod>("value", fido2AuthenticationMethodCollectionResponse.value, serializeFido2AuthenticationMethod);
}
