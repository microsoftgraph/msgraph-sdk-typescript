import {ConditionalAccessExternalTenants} from './conditionalAccessExternalTenants';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessEnumeratedExternalTenants extends ConditionalAccessExternalTenants, Parsable {
    /** The members property */
    members?: string[] | undefined;
}
