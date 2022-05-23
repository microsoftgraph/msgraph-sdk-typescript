import {Entity} from './entity';
import {RoutingMode} from './routingMode';

export interface AudioRoutingGroup extends Entity{
    /** List of receiving participant ids. */
    receivers?:string[] | undefined;
    /** Routing group mode.  Possible values are: oneToOne, multicast. */
    routingMode?:RoutingMode | undefined;
    /** List of source participant ids. */
    sources?:string[] | undefined;
}
