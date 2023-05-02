import {createPasswordAuthenticationMethodFromDiscriminatorValue} from './createPasswordAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {PasswordAuthenticationMethodCollectionResponse} from './passwordAuthenticationMethodCollectionResponse';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordAuthenticationMethodCollectionResponse(passwordAuthenticationMethodCollectionResponse: PasswordAuthenticationMethodCollectionResponse | undefined = {} as PasswordAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(passwordAuthenticationMethodCollectionResponse),
        "value": n => { passwordAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<PasswordAuthenticationMethod>(createPasswordAuthenticationMethodFromDiscriminatorValue); },
    }
}
