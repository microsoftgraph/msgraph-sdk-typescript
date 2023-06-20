import {ClientPlatform} from './clientPlatform';
import {ClientUserAgent} from './clientUserAgent';
import {ProductFamily} from './productFamily';
import {serializeUserAgent} from './serializeUserAgent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClientUserAgent(clientUserAgent: ClientUserAgent | undefined = {} as ClientUserAgent, writer: SerializationWriter) : void {
        serializeUserAgent(writer, clientUserAgent)
        writer.writeStringValue("azureADAppId", clientUserAgent.azureADAppId);
        writer.writeStringValue("communicationServiceId", clientUserAgent.communicationServiceId);
        writer.writeEnumValue<ClientPlatform>("platform", clientUserAgent.platform);
        writer.writeEnumValue<ProductFamily>("productFamily", clientUserAgent.productFamily);
}
