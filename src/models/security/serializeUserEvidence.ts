import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeUserAccount} from './serializeUserAccount';
import {UserAccount} from './userAccount';
import {UserEvidence} from './userEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserEvidence(writer: SerializationWriter, userEvidence: UserEvidence | undefined = {} as UserEvidence) : void {
        serializeAlertEvidence(writer, userEvidence)
        writer.writeObjectValue<UserAccount>("userAccount", userEvidence.userAccount, serializeUserAccount);
}
