import {createTeamsAppPermissionSetFromDiscriminatorValue} from './createTeamsAppPermissionSetFromDiscriminatorValue';
import {serializeTeamsAppPermissionSet} from './serializeTeamsAppPermissionSet';
import {TeamsAppAuthorization} from './teamsAppAuthorization';
import {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppAuthorization(teamsAppAuthorization: TeamsAppAuthorization | undefined = {} as TeamsAppAuthorization) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamsAppAuthorization.odataType = n.getStringValue(); },
        "requiredPermissionSet": n => { teamsAppAuthorization.requiredPermissionSet = n.getObjectValue<TeamsAppPermissionSet>(createTeamsAppPermissionSetFromDiscriminatorValue); },
    }
}
