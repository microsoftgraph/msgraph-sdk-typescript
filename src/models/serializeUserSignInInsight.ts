import { serializeGovernanceInsight } from './serializeGovernanceInsight';
import { type UserSignInInsight } from './userSignInInsight';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserSignInInsight(writer: SerializationWriter, userSignInInsight: UserSignInInsight | undefined = {} as UserSignInInsight) : void {
        serializeGovernanceInsight(writer, userSignInInsight)
        writer.writeDateValue("lastSignInDateTime", userSignInInsight.lastSignInDateTime);
}
