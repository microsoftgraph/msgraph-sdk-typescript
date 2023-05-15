import {HostSecurityState} from './hostSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostSecurityState(hostSecurityState: HostSecurityState | undefined = {} as HostSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "fqdn": n => { hostSecurityState.fqdn = n.getStringValue(); },
        "isAzureAdJoined": n => { hostSecurityState.isAzureAdJoined = n.getBooleanValue(); },
        "isAzureAdRegistered": n => { hostSecurityState.isAzureAdRegistered = n.getBooleanValue(); },
        "isHybridAzureDomainJoined": n => { hostSecurityState.isHybridAzureDomainJoined = n.getBooleanValue(); },
        "netBiosName": n => { hostSecurityState.netBiosName = n.getStringValue(); },
        "@odata.type": n => { hostSecurityState.odataType = n.getStringValue(); },
        "os": n => { hostSecurityState.os = n.getStringValue(); },
        "privateIpAddress": n => { hostSecurityState.privateIpAddress = n.getStringValue(); },
        "publicIpAddress": n => { hostSecurityState.publicIpAddress = n.getStringValue(); },
        "riskScore": n => { hostSecurityState.riskScore = n.getStringValue(); },
    }
}
