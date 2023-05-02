import {ConnectionDirection} from './connectionDirection';
import {ConnectionStatus} from './connectionStatus';
import {NetworkConnection} from './networkConnection';
import {SecurityNetworkProtocol} from './securityNetworkProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNetworkConnection(writer: SerializationWriter, networkConnection: NetworkConnection | undefined = {} as NetworkConnection) : void {
        writer.writeStringValue("applicationName", networkConnection.applicationName);
        writer.writeStringValue("destinationAddress", networkConnection.destinationAddress);
        writer.writeStringValue("destinationDomain", networkConnection.destinationDomain);
        writer.writeStringValue("destinationLocation", networkConnection.destinationLocation);
        writer.writeStringValue("destinationPort", networkConnection.destinationPort);
        writer.writeStringValue("destinationUrl", networkConnection.destinationUrl);
        writer.writeEnumValue<ConnectionDirection>("direction", networkConnection.direction);
        writer.writeDateValue("domainRegisteredDateTime", networkConnection.domainRegisteredDateTime);
        writer.writeStringValue("localDnsName", networkConnection.localDnsName);
        writer.writeStringValue("natDestinationAddress", networkConnection.natDestinationAddress);
        writer.writeStringValue("natDestinationPort", networkConnection.natDestinationPort);
        writer.writeStringValue("natSourceAddress", networkConnection.natSourceAddress);
        writer.writeStringValue("natSourcePort", networkConnection.natSourcePort);
        writer.writeStringValue("@odata.type", networkConnection.odataType);
        writer.writeEnumValue<SecurityNetworkProtocol>("protocol", networkConnection.protocol);
        writer.writeStringValue("riskScore", networkConnection.riskScore);
        writer.writeStringValue("sourceAddress", networkConnection.sourceAddress);
        writer.writeStringValue("sourceLocation", networkConnection.sourceLocation);
        writer.writeStringValue("sourcePort", networkConnection.sourcePort);
        writer.writeEnumValue<ConnectionStatus>("status", networkConnection.status);
        writer.writeStringValue("urlParameters", networkConnection.urlParameters);
        writer.writeAdditionalData(networkConnection.additionalData);
}
