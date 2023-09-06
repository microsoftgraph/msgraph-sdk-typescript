import { type ConditionalAccessExternalTenants } from './conditionalAccessExternalTenants';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConditionalAccessEnumeratedExternalTenants extends ConditionalAccessExternalTenants, Parsable {
    /**
     * A collection of tenant IDs that define the scope of a policy targeting conditional access for guests and external users.
     */
    members?: string[] | undefined;
}
