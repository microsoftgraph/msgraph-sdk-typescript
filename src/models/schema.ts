import {Entity} from './entity';
import {Property} from './externalConnectors/property';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Schema extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Must be set to microsoft.graph.externalItem. Required. */
    baseType?: string | undefined;
    /** The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128. */
    properties?: Property[] | undefined;
}
