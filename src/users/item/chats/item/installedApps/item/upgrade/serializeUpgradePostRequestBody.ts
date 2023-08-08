import {serializeTeamsAppPermissionSet} from '../../../../../../../models/serializeTeamsAppPermissionSet';
import type {TeamsAppPermissionSet} from '../../../../../../../models/teamsAppPermissionSet';
import type {UpgradePostRequestBody} from './upgradePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpgradePostRequestBody(writer: SerializationWriter, upgradePostRequestBody: UpgradePostRequestBody | undefined = {} as UpgradePostRequestBody) : void {
        writer.writeObjectValue<TeamsAppPermissionSet>("consentedPermissionSet", upgradePostRequestBody.consentedPermissionSet, serializeTeamsAppPermissionSet);
        writer.writeAdditionalData(upgradePostRequestBody.additionalData);
}
