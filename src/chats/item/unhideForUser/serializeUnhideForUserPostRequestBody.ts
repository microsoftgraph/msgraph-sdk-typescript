import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../models/teamworkUserIdentity';
import {UnhideForUserPostRequestBody} from './unhideForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnhideForUserPostRequestBody(writer: SerializationWriter, unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {} as UnhideForUserPostRequestBody) : void {
        writer.writeObjectValue<TeamworkUserIdentity>("user", unhideForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(unhideForUserPostRequestBody.additionalData);
}
