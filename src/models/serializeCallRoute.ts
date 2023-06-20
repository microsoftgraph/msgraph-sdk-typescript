import {CallRoute} from './callRoute';
import {IdentitySet} from './identitySet';
import {RoutingType} from './routingType';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRoute(callRoute: CallRoute | undefined = {} as CallRoute, writer: SerializationWriter) : void {
        writer.writeObjectValue<IdentitySet>("final", callRoute.final, serializeIdentitySet);
        writer.writeStringValue("@odata.type", callRoute.odataType);
        writer.writeObjectValue<IdentitySet>("original", callRoute.original, serializeIdentitySet);
        writer.writeEnumValue<RoutingType>("routingType", callRoute.routingType);
        writer.writeAdditionalData(callRoute.additionalData);
}
