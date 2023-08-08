import type {BasicAuthentication} from './basicAuthentication';
import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBasicAuthentication(basicAuthentication: BasicAuthentication | undefined = {} as BasicAuthentication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiAuthenticationConfigurationBase(basicAuthentication),
        "password": n => { basicAuthentication.password = n.getStringValue(); },
        "username": n => { basicAuthentication.username = n.getStringValue(); },
    }
}
