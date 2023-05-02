import {AppIdentity} from './appIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppIdentity(appIdentity: AppIdentity | undefined = {} as AppIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { appIdentity.appId = n.getStringValue(); },
        "displayName": n => { appIdentity.displayName = n.getStringValue(); },
        "@odata.type": n => { appIdentity.odataType = n.getStringValue(); },
        "servicePrincipalId": n => { appIdentity.servicePrincipalId = n.getStringValue(); },
        "servicePrincipalName": n => { appIdentity.servicePrincipalName = n.getStringValue(); },
    }
}
