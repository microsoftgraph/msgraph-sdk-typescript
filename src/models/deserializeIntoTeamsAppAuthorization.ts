import { createTeamsAppPermissionSetFromDiscriminatorValue } from './createTeamsAppPermissionSetFromDiscriminatorValue';
import { serializeTeamsAppPermissionSet } from './serializeTeamsAppPermissionSet';
import { type TeamsAppAuthorization } from './teamsAppAuthorization';
import { type TeamsAppPermissionSet } from './teamsAppPermissionSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppAuthorization(teamsAppAuthorization: TeamsAppAuthorization | undefined = {} as TeamsAppAuthorization) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamsAppAuthorization.odataType = n.getStringValue(); },
        "requiredPermissionSet": n => { teamsAppAuthorization.requiredPermissionSet = n.getObjectValue<TeamsAppPermissionSet>(createTeamsAppPermissionSetFromDiscriminatorValue); },
    }
}
