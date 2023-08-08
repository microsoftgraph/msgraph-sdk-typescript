import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import type {ServicePrincipalIdentity} from './servicePrincipalIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalIdentity(servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {} as ServicePrincipalIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(servicePrincipalIdentity),
        "appId": n => { servicePrincipalIdentity.appId = n.getStringValue(); },
    }
}
