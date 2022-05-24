import {DomainDnsRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.domainDnsRecord":
                    return new DomainDnsRecordImpl();
            }
        }
    }
    return new DomainDnsRecordImpl();
}
