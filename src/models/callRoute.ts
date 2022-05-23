import {IdentitySet} from './identitySet';
import {RoutingType} from './routingType';

export interface CallRoute{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The final property */
    final?:IdentitySet | undefined;
    /** The original property */
    original?:IdentitySet | undefined;
    /** Possible values are: forwarded, lookup, selfFork. */
    routingType?:RoutingType | undefined;
}
