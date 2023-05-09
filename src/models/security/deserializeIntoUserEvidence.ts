import {createUserAccountFromDiscriminatorValue} from './createUserAccountFromDiscriminatorValue';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {serializeUserAccount} from './serializeUserAccount';
import {UserAccount} from './userAccount';
import {UserEvidence} from './userEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserEvidence(userEvidence: UserEvidence | undefined = {} as UserEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(userEvidence),
        "userAccount": n => { userEvidence.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
    }
}
