import type {Entity} from '../entity';
import type {Property} from './property';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Schema extends Entity, Parsable {
    /**
     * Must be set to microsoft.graph.externalConnector.externalItem. Required.
     */
    baseType?: string | undefined;
    /**
     * The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.
     */
    properties?: Property[] | undefined;
}
