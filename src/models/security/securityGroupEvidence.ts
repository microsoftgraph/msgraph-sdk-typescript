import { type AlertEvidence } from './alertEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SecurityGroupEvidence extends AlertEvidence, Parsable {
    /**
     * The name of the security group.
     */
    displayName?: string | undefined;
    /**
     * Unique identifier of the security group.
     */
    securityGroupId?: string | undefined;
}
