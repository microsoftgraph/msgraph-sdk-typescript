import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from '../../../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../../../models/teamworkUserIdentity';
import {UnhideForUserPostRequestBody} from './unhideForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnhideForUserPostRequestBody(unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {} as UnhideForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { unhideForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
