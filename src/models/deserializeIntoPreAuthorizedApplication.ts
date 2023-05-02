import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPreAuthorizedApplication(preAuthorizedApplication: PreAuthorizedApplication | undefined = {} as PreAuthorizedApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { preAuthorizedApplication.appId = n.getStringValue(); },
        "delegatedPermissionIds": n => { preAuthorizedApplication.delegatedPermissionIds = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { preAuthorizedApplication.odataType = n.getStringValue(); },
    }
}
