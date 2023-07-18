import {AppRole} from './appRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoAppRole(appRole: AppRole | undefined = {} as AppRole) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedMemberTypes": n => { appRole.allowedMemberTypes = n.getCollectionOfPrimitiveValues<string>(); },
        "description": n => { appRole.description = n.getStringValue(); },
        "displayName": n => { appRole.displayName = n.getStringValue(); },
        "id": n => { appRole.id = n.getGuidValue(); },
        "isEnabled": n => { appRole.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { appRole.odataType = n.getStringValue(); },
        "origin": n => { appRole.origin = n.getStringValue(); },
        "value": n => { appRole.value = n.getStringValue(); },
    }
}
