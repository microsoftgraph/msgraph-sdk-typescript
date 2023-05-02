import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {PhoneAuthenticationMethodCollectionResponse} from './phoneAuthenticationMethodCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoneAuthenticationMethodCollectionResponse(writer: SerializationWriter, phoneAuthenticationMethodCollectionResponse: PhoneAuthenticationMethodCollectionResponse | undefined = {} as PhoneAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, phoneAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<PhoneAuthenticationMethod>("value", phoneAuthenticationMethodCollectionResponse.value, serializePhoneAuthenticationMethod);
}
