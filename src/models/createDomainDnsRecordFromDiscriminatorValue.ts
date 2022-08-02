import {DomainDnsCnameRecord, DomainDnsMxRecord, DomainDnsRecord, DomainDnsSrvRecord, DomainDnsTxtRecord, DomainDnsUnavailableRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.domainDnsCnameRecord":
                    return new DomainDnsCnameRecord();
                case "#microsoft.graph.domainDnsMxRecord":
                    return new DomainDnsMxRecord();
                case "#microsoft.graph.domainDnsSrvRecord":
                    return new DomainDnsSrvRecord();
                case "#microsoft.graph.domainDnsTxtRecord":
                    return new DomainDnsTxtRecord();
                case "#microsoft.graph.domainDnsUnavailableRecord":
                    return new DomainDnsUnavailableRecord();
            }
        }
    }
    return new DomainDnsRecord();
}
