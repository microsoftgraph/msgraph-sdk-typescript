import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../models/teamworkUserIdentity';
import {HideForUserPostRequestBody} from './hideForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHideForUserPostRequestBody(writer: SerializationWriter, hideForUserPostRequestBody: HideForUserPostRequestBody | undefined = {} as HideForUserPostRequestBody) : void {
        writer.writeObjectValue<TeamworkUserIdentity>("user", hideForUserPostRequestBody.user, serializeTeamworkUserIdentity);
        writer.writeAdditionalData(hideForUserPostRequestBody.additionalData);
}
