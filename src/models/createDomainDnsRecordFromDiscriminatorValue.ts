import { deserializeIntoDomainDnsCnameRecord } from './deserializeIntoDomainDnsCnameRecord';
import { deserializeIntoDomainDnsMxRecord } from './deserializeIntoDomainDnsMxRecord';
import { deserializeIntoDomainDnsRecord } from './deserializeIntoDomainDnsRecord';
import { deserializeIntoDomainDnsSrvRecord } from './deserializeIntoDomainDnsSrvRecord';
import { deserializeIntoDomainDnsTxtRecord } from './deserializeIntoDomainDnsTxtRecord';
import { deserializeIntoDomainDnsUnavailableRecord } from './deserializeIntoDomainDnsUnavailableRecord';
import { type DomainDnsCnameRecord, type DomainDnsMxRecord, type DomainDnsRecord, type DomainDnsSrvRecord, type DomainDnsTxtRecord, type DomainDnsUnavailableRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.domainDnsCnameRecord":
                    return deserializeIntoDomainDnsCnameRecord;
                case "#microsoft.graph.domainDnsMxRecord":
                    return deserializeIntoDomainDnsMxRecord;
                case "#microsoft.graph.domainDnsSrvRecord":
                    return deserializeIntoDomainDnsSrvRecord;
                case "#microsoft.graph.domainDnsTxtRecord":
                    return deserializeIntoDomainDnsTxtRecord;
                case "#microsoft.graph.domainDnsUnavailableRecord":
                    return deserializeIntoDomainDnsUnavailableRecord;
            }
        }
    }
    return deserializeIntoDomainDnsRecord;
}
