import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoResourceSpecificPermission(resourceSpecificPermission: ResourceSpecificPermission | undefined = {} as ResourceSpecificPermission) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { resourceSpecificPermission.description = n.getStringValue(); },
        "displayName": n => { resourceSpecificPermission.displayName = n.getStringValue(); },
        "id": n => { resourceSpecificPermission.id = n.getGuidValue(); },
        "isEnabled": n => { resourceSpecificPermission.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { resourceSpecificPermission.odataType = n.getStringValue(); },
        "value": n => { resourceSpecificPermission.value = n.getStringValue(); },
    }
}
