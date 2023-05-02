import {ConnectionDirection} from './connectionDirection';
import {ConnectionStatus} from './connectionStatus';
import {NetworkConnection} from './networkConnection';
import {SecurityNetworkProtocol} from './securityNetworkProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNetworkConnection(networkConnection: NetworkConnection | undefined = {} as NetworkConnection) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationName": n => { networkConnection.applicationName = n.getStringValue(); },
        "destinationAddress": n => { networkConnection.destinationAddress = n.getStringValue(); },
        "destinationDomain": n => { networkConnection.destinationDomain = n.getStringValue(); },
        "destinationLocation": n => { networkConnection.destinationLocation = n.getStringValue(); },
        "destinationPort": n => { networkConnection.destinationPort = n.getStringValue(); },
        "destinationUrl": n => { networkConnection.destinationUrl = n.getStringValue(); },
        "direction": n => { networkConnection.direction = n.getEnumValue<ConnectionDirection>(ConnectionDirection); },
        "domainRegisteredDateTime": n => { networkConnection.domainRegisteredDateTime = n.getDateValue(); },
        "localDnsName": n => { networkConnection.localDnsName = n.getStringValue(); },
        "natDestinationAddress": n => { networkConnection.natDestinationAddress = n.getStringValue(); },
        "natDestinationPort": n => { networkConnection.natDestinationPort = n.getStringValue(); },
        "natSourceAddress": n => { networkConnection.natSourceAddress = n.getStringValue(); },
        "natSourcePort": n => { networkConnection.natSourcePort = n.getStringValue(); },
        "@odata.type": n => { networkConnection.odataType = n.getStringValue(); },
        "protocol": n => { networkConnection.protocol = n.getEnumValue<SecurityNetworkProtocol>(SecurityNetworkProtocol); },
        "riskScore": n => { networkConnection.riskScore = n.getStringValue(); },
        "sourceAddress": n => { networkConnection.sourceAddress = n.getStringValue(); },
        "sourceLocation": n => { networkConnection.sourceLocation = n.getStringValue(); },
        "sourcePort": n => { networkConnection.sourcePort = n.getStringValue(); },
        "status": n => { networkConnection.status = n.getEnumValue<ConnectionStatus>(ConnectionStatus); },
        "urlParameters": n => { networkConnection.urlParameters = n.getStringValue(); },
    }
}
