import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSignIn} from './serializeSignIn';
import type {SignIn} from './signIn';
import type {SignInCollectionResponse} from './signInCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignInCollectionResponse(writer: SerializationWriter, signInCollectionResponse: SignInCollectionResponse | undefined = {} as SignInCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, signInCollectionResponse)
        writer.writeCollectionOfObjectValues<SignIn>("value", signInCollectionResponse.value, serializeSignIn);
}
