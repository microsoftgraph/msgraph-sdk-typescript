import {ClonableTeamParts} from '../../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../../models/teamVisibilityType';
import {ClonePostRequestBody} from './clonePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClonePostRequestBody(clonePostRequestBody: ClonePostRequestBody | undefined = {} as ClonePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("classification", clonePostRequestBody.classification);
        writer.writeStringValue("description", clonePostRequestBody.description);
        writer.writeStringValue("displayName", clonePostRequestBody.displayName);
        writer.writeStringValue("mailNickname", clonePostRequestBody.mailNickname);
        writer.writeEnumValue<ClonableTeamParts>("partsToClone", clonePostRequestBody.partsToClone);
        writer.writeEnumValue<TeamVisibilityType>("visibility", clonePostRequestBody.visibility);
        writer.writeAdditionalData(clonePostRequestBody.additionalData);
}
