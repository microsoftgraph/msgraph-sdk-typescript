import {GovernanceInsight} from './governanceInsight';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSignInInsight extends GovernanceInsight, Parsable {
    /**
     * The lastSignInDateTime property
     */
    lastSignInDateTime?: Date | undefined;
}
