import {Entity} from './entity';
import {UserFlowType} from './userFlowType';

export interface IdentityUserFlow extends Entity{
    /** The userFlowType property */
    userFlowType?:UserFlowType | undefined;
    /** The userFlowTypeVersion property */
    userFlowTypeVersion?:number | undefined;
}
