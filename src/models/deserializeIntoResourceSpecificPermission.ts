import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceSpecificPermission(resourceSpecificPermission: ResourceSpecificPermission | undefined = {} as ResourceSpecificPermission) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { resourceSpecificPermission.description = n.getStringValue(); },
        "displayName": n => { resourceSpecificPermission.displayName = n.getStringValue(); },
        "id": n => { resourceSpecificPermission.id = n.getStringValue(); },
        "isEnabled": n => { resourceSpecificPermission.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { resourceSpecificPermission.odataType = n.getStringValue(); },
        "value": n => { resourceSpecificPermission.value = n.getStringValue(); },
    }
}
