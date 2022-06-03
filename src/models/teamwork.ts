import {Entity} from './entity';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Teamwork extends Entity, Partial<Parsable> {
    /** A workforce integration with shifts. */
    workforceIntegrations?: WorkforceIntegration[] | undefined;
}
