import {CallRoute} from './callRoute';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {RoutingType} from './routingType';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRoute(callRoute: CallRoute | undefined = {} as CallRoute) : Record<string, (node: ParseNode) => void> {
    return {
        "final": n => { callRoute.final = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { callRoute.odataType = n.getStringValue(); },
        "original": n => { callRoute.original = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "routingType": n => { callRoute.routingType = n.getEnumValue<RoutingType>(RoutingType); },
    }
}
