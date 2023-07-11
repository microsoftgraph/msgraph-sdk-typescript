import {Entity} from './entity';
import {RoutingMode} from './routingMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroup extends Entity, Parsable {
    /**
     * The receivers property
     */
    receivers?: string[] | undefined;
    /**
     * The routingMode property
     */
    routingMode?: RoutingMode | undefined;
    /**
     * The sources property
     */
    sources?: string[] | undefined;
}
