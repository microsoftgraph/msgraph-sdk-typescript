import {deserializeIntoGovernanceInsight} from './deserializeIntoGovernanceInsight';
import {UserSignInInsight} from './userSignInInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSignInInsight(userSignInInsight: UserSignInInsight | undefined = {} as UserSignInInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGovernanceInsight(userSignInInsight),
        "lastSignInDateTime": n => { userSignInInsight.lastSignInDateTime = n.getDateValue(); },
    }
}
