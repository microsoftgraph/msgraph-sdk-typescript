import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from '../../../../models/serializeTeamworkUserIdentity';
import {TeamworkUserIdentity} from '../../../../models/teamworkUserIdentity';
import {HideForUserPostRequestBody} from './hideForUserPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHideForUserPostRequestBody(hideForUserPostRequestBody: HideForUserPostRequestBody | undefined = {} as HideForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { hideForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
