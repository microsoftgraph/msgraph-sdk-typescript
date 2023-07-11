import {Entity} from './entity';
import {UserFlowType} from './userFlowType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlow extends Entity, Parsable {
    /**
     * The userFlowType property
     */
    userFlowType?: UserFlowType | undefined;
    /**
     * The userFlowTypeVersion property
     */
    userFlowTypeVersion?: number | undefined;
}
