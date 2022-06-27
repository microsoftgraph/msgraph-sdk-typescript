import {Entity} from './entity';
import {RoutingMode} from './routingMode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroup extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of receiving participant ids. */
    receivers?: string[] | undefined;
    /** Routing group mode.  Possible values are: oneToOne, multicast. */
    routingMode?: RoutingMode | undefined;
    /** List of source participant ids. */
    sources?: string[] | undefined;
}
