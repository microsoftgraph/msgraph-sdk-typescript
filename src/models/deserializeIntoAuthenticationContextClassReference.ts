import { type AuthenticationContextClassReference } from './authenticationContextClassReference';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationContextClassReference(authenticationContextClassReference: AuthenticationContextClassReference | undefined = {} as AuthenticationContextClassReference) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationContextClassReference),
        "description": n => { authenticationContextClassReference.description = n.getStringValue(); },
        "displayName": n => { authenticationContextClassReference.displayName = n.getStringValue(); },
        "isAvailable": n => { authenticationContextClassReference.isAvailable = n.getBooleanValue(); },
    }
}
