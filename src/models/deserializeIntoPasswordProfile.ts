import { type PasswordProfile } from './passwordProfile';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordProfile(passwordProfile: PasswordProfile | undefined = {} as PasswordProfile) : Record<string, (node: ParseNode) => void> {
    return {
        "forceChangePasswordNextSignIn": n => { passwordProfile.forceChangePasswordNextSignIn = n.getBooleanValue(); },
        "forceChangePasswordNextSignInWithMfa": n => { passwordProfile.forceChangePasswordNextSignInWithMfa = n.getBooleanValue(); },
        "@odata.type": n => { passwordProfile.odataType = n.getStringValue(); },
        "password": n => { passwordProfile.password = n.getStringValue(); },
    }
}
