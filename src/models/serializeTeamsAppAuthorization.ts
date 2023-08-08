import {serializeTeamsAppPermissionSet} from './serializeTeamsAppPermissionSet';
import type {TeamsAppAuthorization} from './teamsAppAuthorization';
import type {TeamsAppPermissionSet} from './teamsAppPermissionSet';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppAuthorization(writer: SerializationWriter, teamsAppAuthorization: TeamsAppAuthorization | undefined = {} as TeamsAppAuthorization) : void {
        writer.writeStringValue("@odata.type", teamsAppAuthorization.odataType);
        writer.writeObjectValue<TeamsAppPermissionSet>("requiredPermissionSet", teamsAppAuthorization.requiredPermissionSet, serializeTeamsAppPermissionSet);
        writer.writeAdditionalData(teamsAppAuthorization.additionalData);
}
