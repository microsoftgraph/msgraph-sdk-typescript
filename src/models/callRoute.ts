import {IdentitySet} from './identitySet';
import {RoutingType} from './routingType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallRoute extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The final property
     */
    final?: IdentitySet | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The original property
     */
    original?: IdentitySet | undefined;
    /**
     * The routingType property
     */
    routingType?: RoutingType | undefined;
}
