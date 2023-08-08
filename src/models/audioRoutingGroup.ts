import type {Entity} from './entity';
import {RoutingMode} from './routingMode';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroup extends Entity, Parsable {
    /**
     * List of receiving participant ids.
     */
    receivers?: string[] | undefined;
    /**
     * The routingMode property
     */
    routingMode?: RoutingMode | undefined;
    /**
     * List of source participant ids.
     */
    sources?: string[] | undefined;
}
