import {HostSecurityState} from './hostSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostSecurityState(writer: SerializationWriter, hostSecurityState: HostSecurityState | undefined = {} as HostSecurityState) : void {
        writer.writeStringValue("fqdn", hostSecurityState.fqdn);
        writer.writeBooleanValue("isAzureAdJoined", hostSecurityState.isAzureAdJoined);
        writer.writeBooleanValue("isAzureAdRegistered", hostSecurityState.isAzureAdRegistered);
        writer.writeBooleanValue("isHybridAzureDomainJoined", hostSecurityState.isHybridAzureDomainJoined);
        writer.writeStringValue("netBiosName", hostSecurityState.netBiosName);
        writer.writeStringValue("@odata.type", hostSecurityState.odataType);
        writer.writeStringValue("os", hostSecurityState.os);
        writer.writeStringValue("privateIpAddress", hostSecurityState.privateIpAddress);
        writer.writeStringValue("publicIpAddress", hostSecurityState.publicIpAddress);
        writer.writeStringValue("riskScore", hostSecurityState.riskScore);
        writer.writeAdditionalData(hostSecurityState.additionalData);
}
