import {createPhoneAuthenticationMethodFromDiscriminatorValue} from './createPhoneAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {PhoneAuthenticationMethodCollectionResponse} from './phoneAuthenticationMethodCollectionResponse';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoneAuthenticationMethodCollectionResponse(phoneAuthenticationMethodCollectionResponse: PhoneAuthenticationMethodCollectionResponse | undefined = {} as PhoneAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(phoneAuthenticationMethodCollectionResponse),
        "value": n => { phoneAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<PhoneAuthenticationMethod>(createPhoneAuthenticationMethodFromDiscriminatorValue); },
    }
}
