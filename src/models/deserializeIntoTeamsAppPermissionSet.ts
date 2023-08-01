import {createTeamsAppResourceSpecificPermissionFromDiscriminatorValue} from './createTeamsAppResourceSpecificPermissionFromDiscriminatorValue';
import {serializeTeamsAppResourceSpecificPermission} from './serializeTeamsAppResourceSpecificPermission';
import type {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import type {TeamsAppResourceSpecificPermission} from './teamsAppResourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppPermissionSet(teamsAppPermissionSet: TeamsAppPermissionSet | undefined = {} as TeamsAppPermissionSet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamsAppPermissionSet.odataType = n.getStringValue(); },
        "resourceSpecificPermissions": n => { teamsAppPermissionSet.resourceSpecificPermissions = n.getCollectionOfObjectValues<TeamsAppResourceSpecificPermission>(createTeamsAppResourceSpecificPermissionFromDiscriminatorValue); },
    }
}
