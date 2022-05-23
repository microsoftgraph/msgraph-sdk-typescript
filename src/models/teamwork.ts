import {Entity} from './entity';
import {WorkforceIntegration} from './workforceIntegration';

export interface Teamwork extends Entity{
    /** A workforce integration with shifts. */
    workforceIntegrations?:WorkforceIntegration[] | undefined;
}
