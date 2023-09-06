import { serializeTeamworkUserIdentity } from '../../../../models/serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from '../../../../models/teamworkUserIdentity';
import { type UnhideForUserPostRequestBody } from './unhideForUserPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnhideForUserPostRequestBody(writer: SerializationWriter, unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {} as UnhideForUserPostRequestBody) : void {
        writer.writeObjectValue<TeamworkUserIdentity>("user", unhideForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(unhideForUserPostRequestBody.additionalData);
}
