import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {serializeTeamworkUserIdentity} from '../../../models/serializeTeamworkUserIdentity';
import type {TeamworkUserIdentity} from '../../../models/teamworkUserIdentity';
import type {HideForUserPostRequestBody} from './hideForUserPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHideForUserPostRequestBody(hideForUserPostRequestBody: HideForUserPostRequestBody | undefined = {} as HideForUserPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { hideForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
