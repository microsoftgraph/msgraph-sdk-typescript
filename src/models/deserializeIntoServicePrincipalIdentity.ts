import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ServicePrincipalIdentity} from './servicePrincipalIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalIdentity(servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {} as ServicePrincipalIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(servicePrincipalIdentity),
        "appId": n => { servicePrincipalIdentity.appId = n.getStringValue(); },
    }
}
