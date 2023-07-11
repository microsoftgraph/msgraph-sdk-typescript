import {GovernanceInsight} from './governanceInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSignInInsight extends GovernanceInsight, Parsable {
    /**
     * Indicates when the user last signed in.
     */
    lastSignInDateTime?: Date | undefined;
}
