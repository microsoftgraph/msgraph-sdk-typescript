import {deserializeIntoAttributeRuleMembers} from './deserializeIntoAttributeRuleMembers';
import {deserializeIntoConnectedOrganizationMembers} from './deserializeIntoConnectedOrganizationMembers';
import {deserializeIntoExternalSponsors} from './deserializeIntoExternalSponsors';
import {deserializeIntoGroupMembers} from './deserializeIntoGroupMembers';
import {deserializeIntoInternalSponsors} from './deserializeIntoInternalSponsors';
import {deserializeIntoRequestorManager} from './deserializeIntoRequestorManager';
import {deserializeIntoSingleServicePrincipal} from './deserializeIntoSingleServicePrincipal';
import {deserializeIntoSingleUser} from './deserializeIntoSingleUser';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {deserializeIntoTargetApplicationOwners} from './deserializeIntoTargetApplicationOwners';
import {deserializeIntoTargetManager} from './deserializeIntoTargetManager';
import {RuleBasedSubjectSet} from './identityGovernance/';
import {deserializeIntoRuleBasedSubjectSet} from './identityGovernance/deserializeIntoRuleBasedSubjectSet';
import {AttributeRuleMembers, ConnectedOrganizationMembers, ExternalSponsors, GroupMembers, InternalSponsors, RequestorManager, SingleServicePrincipal, SingleUser, SubjectSet, TargetApplicationOwners, TargetManager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attributeRuleMembers":
                    return deserializeIntoAttributeRuleMembers;
                case "#microsoft.graph.connectedOrganizationMembers":
                    return deserializeIntoConnectedOrganizationMembers;
                case "#microsoft.graph.externalSponsors":
                    return deserializeIntoExternalSponsors;
                case "#microsoft.graph.groupMembers":
                    return deserializeIntoGroupMembers;
                case "#microsoft.graph.identityGovernance.ruleBasedSubjectSet":
                    return deserializeIntoRuleBasedSubjectSet;
                case "#microsoft.graph.internalSponsors":
                    return deserializeIntoInternalSponsors;
                case "#microsoft.graph.requestorManager":
                    return deserializeIntoRequestorManager;
                case "#microsoft.graph.singleServicePrincipal":
                    return deserializeIntoSingleServicePrincipal;
                case "#microsoft.graph.singleUser":
                    return deserializeIntoSingleUser;
                case "#microsoft.graph.targetApplicationOwners":
                    return deserializeIntoTargetApplicationOwners;
                case "#microsoft.graph.targetManager":
                    return deserializeIntoTargetManager;
            }
        }
    }
    return deserializeIntoSubjectSet;
}
