import {ConnectedOrganizationMembersImpl, ExternalSponsorsImpl, GroupMembersImpl, InternalSponsorsImpl, RequestorManagerImpl, SingleServicePrincipalImpl, SingleUserImpl, SubjectSetImpl, TargetApplicationOwnersImpl, TargetManagerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.connectedOrganizationMembers":
                    return new ConnectedOrganizationMembersImpl();
                case "#microsoft.graph.externalSponsors":
                    return new ExternalSponsorsImpl();
                case "#microsoft.graph.groupMembers":
                    return new GroupMembersImpl();
                case "#microsoft.graph.internalSponsors":
                    return new InternalSponsorsImpl();
                case "#microsoft.graph.requestorManager":
                    return new RequestorManagerImpl();
                case "#microsoft.graph.singleServicePrincipal":
                    return new SingleServicePrincipalImpl();
                case "#microsoft.graph.singleUser":
                    return new SingleUserImpl();
                case "#microsoft.graph.targetApplicationOwners":
                    return new TargetApplicationOwnersImpl();
                case "#microsoft.graph.targetManager":
                    return new TargetManagerImpl();
            }
        }
    }
    return new SubjectSetImpl();
}
