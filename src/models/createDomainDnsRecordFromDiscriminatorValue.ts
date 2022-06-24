import {DomainDnsCnameRecordImpl, DomainDnsMxRecordImpl, DomainDnsRecordImpl, DomainDnsSrvRecordImpl, DomainDnsTxtRecordImpl, DomainDnsUnavailableRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.domainDnsCnameRecord":
                    return new DomainDnsCnameRecordImpl();
                case "#microsoft.graph.domainDnsMxRecord":
                    return new DomainDnsMxRecordImpl();
                case "#microsoft.graph.domainDnsSrvRecord":
                    return new DomainDnsSrvRecordImpl();
                case "#microsoft.graph.domainDnsTxtRecord":
                    return new DomainDnsTxtRecordImpl();
                case "#microsoft.graph.domainDnsUnavailableRecord":
                    return new DomainDnsUnavailableRecordImpl();
            }
        }
    }
    return new DomainDnsRecordImpl();
}
