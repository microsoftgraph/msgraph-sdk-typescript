import { type AuthenticationMethod } from './authenticationMethod';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethod(authenticationMethod: AuthenticationMethod | undefined = {} as AuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethod),
    }
}
