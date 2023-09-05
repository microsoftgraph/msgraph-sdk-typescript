import { type AppIdentity } from './appIdentity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAppIdentity(appIdentity: AppIdentity | undefined = {} as AppIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { appIdentity.appId = n.getStringValue(); },
        "displayName": n => { appIdentity.displayName = n.getStringValue(); },
        "@odata.type": n => { appIdentity.odataType = n.getStringValue(); },
        "servicePrincipalId": n => { appIdentity.servicePrincipalId = n.getStringValue(); },
        "servicePrincipalName": n => { appIdentity.servicePrincipalName = n.getStringValue(); },
    }
}
