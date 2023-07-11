import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {UserSignInInsight} from './userSignInInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSignInInsight(writer: SerializationWriter, userSignInInsight: UserSignInInsight | undefined = {} as UserSignInInsight) : void {
        serializeGovernanceInsight(writer, userSignInInsight)
        writer.writeDateValue("lastSignInDateTime", userSignInInsight.lastSignInDateTime);
}
