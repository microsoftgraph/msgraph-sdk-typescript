import { deserializeIntoGovernanceInsight } from './deserializeIntoGovernanceInsight';
import { type UserSignInInsight } from './userSignInInsight';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSignInInsight(userSignInInsight: UserSignInInsight | undefined = {} as UserSignInInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGovernanceInsight(userSignInInsight),
        "lastSignInDateTime": n => { userSignInInsight.lastSignInDateTime = n.getDateValue(); },
    }
}
