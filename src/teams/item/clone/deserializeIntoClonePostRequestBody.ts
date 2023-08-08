import {ClonableTeamParts} from '../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/teamVisibilityType';
import type {ClonePostRequestBody} from './clonePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClonePostRequestBody(clonePostRequestBody: ClonePostRequestBody | undefined = {} as ClonePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "classification": n => { clonePostRequestBody.classification = n.getStringValue(); },
        "description": n => { clonePostRequestBody.description = n.getStringValue(); },
        "displayName": n => { clonePostRequestBody.displayName = n.getStringValue(); },
        "mailNickname": n => { clonePostRequestBody.mailNickname = n.getStringValue(); },
        "partsToClone": n => { clonePostRequestBody.partsToClone = n.getEnumValue<ClonableTeamParts>(ClonableTeamParts); },
        "visibility": n => { clonePostRequestBody.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
    }
}
