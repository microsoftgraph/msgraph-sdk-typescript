import { createTeamworkUserIdentityFromDiscriminatorValue } from '../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import { serializeTeamworkUserIdentity } from '../../../models/serializeTeamworkUserIdentity';
import { type TeamworkUserIdentity } from '../../../models/teamworkUserIdentity';
import { type UnhideForUserPostRequestBody } from './unhideForUserPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnhideForUserPostRequestBody(unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {} as UnhideForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { unhideForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
