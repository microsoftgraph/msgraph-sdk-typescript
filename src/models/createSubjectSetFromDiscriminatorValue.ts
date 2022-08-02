import {AttributeRuleMembers, ConnectedOrganizationMembers, ExternalSponsors, GroupMembers, InternalSponsors, RequestorManager, SingleServicePrincipal, SingleUser, SubjectSet, TargetApplicationOwners, TargetManager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attributeRuleMembers":
                    return new AttributeRuleMembers();
                case "#microsoft.graph.connectedOrganizationMembers":
                    return new ConnectedOrganizationMembers();
                case "#microsoft.graph.externalSponsors":
                    return new ExternalSponsors();
                case "#microsoft.graph.groupMembers":
                    return new GroupMembers();
                case "#microsoft.graph.internalSponsors":
                    return new InternalSponsors();
                case "#microsoft.graph.requestorManager":
                    return new RequestorManager();
                case "#microsoft.graph.singleServicePrincipal":
                    return new SingleServicePrincipal();
                case "#microsoft.graph.singleUser":
                    return new SingleUser();
                case "#microsoft.graph.targetApplicationOwners":
                    return new TargetApplicationOwners();
                case "#microsoft.graph.targetManager":
                    return new TargetManager();
            }
        }
    }
    return new SubjectSet();
}
