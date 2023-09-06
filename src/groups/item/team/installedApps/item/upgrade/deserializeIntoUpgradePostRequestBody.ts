import { createTeamsAppPermissionSetFromDiscriminatorValue } from '../../../../../../models/createTeamsAppPermissionSetFromDiscriminatorValue';
import { serializeTeamsAppPermissionSet } from '../../../../../../models/serializeTeamsAppPermissionSet';
import { type TeamsAppPermissionSet } from '../../../../../../models/teamsAppPermissionSet';
import { type UpgradePostRequestBody } from './upgradePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpgradePostRequestBody(upgradePostRequestBody: UpgradePostRequestBody | undefined = {} as UpgradePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "consentedPermissionSet": n => { upgradePostRequestBody.consentedPermissionSet = n.getObjectValue<TeamsAppPermissionSet>(createTeamsAppPermissionSetFromDiscriminatorValue); },
    }
}
