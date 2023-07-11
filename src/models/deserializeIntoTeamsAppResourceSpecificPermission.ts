import {TeamsAppResourceSpecificPermission} from './teamsAppResourceSpecificPermission';
import {TeamsAppResourceSpecificPermissionType} from './teamsAppResourceSpecificPermissionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppResourceSpecificPermission(teamsAppResourceSpecificPermission: TeamsAppResourceSpecificPermission | undefined = {} as TeamsAppResourceSpecificPermission) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamsAppResourceSpecificPermission.odataType = n.getStringValue(); },
        "permissionType": n => { teamsAppResourceSpecificPermission.permissionType = n.getEnumValue<TeamsAppResourceSpecificPermissionType>(TeamsAppResourceSpecificPermissionType); },
        "permissionValue": n => { teamsAppResourceSpecificPermission.permissionValue = n.getStringValue(); },
    }
}
