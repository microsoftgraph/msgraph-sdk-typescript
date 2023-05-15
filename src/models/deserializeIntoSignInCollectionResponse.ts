import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSignIn} from './serializeSignIn';
import {SignIn} from './signIn';
import {SignInCollectionResponse} from './signInCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInCollectionResponse(signInCollectionResponse: SignInCollectionResponse | undefined = {} as SignInCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(signInCollectionResponse),
        "value": n => { signInCollectionResponse.value = n.getCollectionOfObjectValues<SignIn>(createSignInFromDiscriminatorValue); },
    }
}
