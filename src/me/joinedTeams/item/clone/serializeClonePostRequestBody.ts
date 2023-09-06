import { ClonableTeamParts } from '../../../../models/clonableTeamParts';
import { TeamVisibilityType } from '../../../../models/teamVisibilityType';
import { type ClonePostRequestBody } from './clonePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeClonePostRequestBody(writer: SerializationWriter, clonePostRequestBody: ClonePostRequestBody | undefined = {} as ClonePostRequestBody) : void {
        writer.writeStringValue("classification", clonePostRequestBody.classification);
        writer.writeStringValue("description", clonePostRequestBody.description);
        writer.writeStringValue("displayName", clonePostRequestBody.displayName);
        writer.writeStringValue("mailNickname", clonePostRequestBody.mailNickname);
        writer.writeEnumValue<ClonableTeamParts[]>("partsToClone", clonePostRequestBody.partsToClone);
        writer.writeEnumValue<TeamVisibilityType>("visibility", clonePostRequestBody.visibility);
        writer.writeAdditionalData(clonePostRequestBody.additionalData);
}
