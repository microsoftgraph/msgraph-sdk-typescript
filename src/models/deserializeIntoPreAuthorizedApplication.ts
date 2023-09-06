import { type PreAuthorizedApplication } from './preAuthorizedApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPreAuthorizedApplication(preAuthorizedApplication: PreAuthorizedApplication | undefined = {} as PreAuthorizedApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { preAuthorizedApplication.appId = n.getStringValue(); },
        "delegatedPermissionIds": n => { preAuthorizedApplication.delegatedPermissionIds = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { preAuthorizedApplication.odataType = n.getStringValue(); },
    }
}
