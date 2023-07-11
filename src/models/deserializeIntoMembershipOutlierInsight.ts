import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoGovernanceInsight} from './deserializeIntoGovernanceInsight';
import {DirectoryObject} from './directoryObject';
import {MembershipOutlierInsight} from './membershipOutlierInsight';
import {OutlierContainerType} from './outlierContainerType';
import {OutlierMemberType} from './outlierMemberType';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMembershipOutlierInsight(membershipOutlierInsight: MembershipOutlierInsight | undefined = {} as MembershipOutlierInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGovernanceInsight(membershipOutlierInsight),
        "container": n => { membershipOutlierInsight.container = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "containerId": n => { membershipOutlierInsight.containerId = n.getStringValue(); },
        "lastModifiedBy": n => { membershipOutlierInsight.lastModifiedBy = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "member": n => { membershipOutlierInsight.member = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "memberId": n => { membershipOutlierInsight.memberId = n.getStringValue(); },
        "outlierContainerType": n => { membershipOutlierInsight.outlierContainerType = n.getEnumValue<OutlierContainerType>(OutlierContainerType); },
        "outlierMemberType": n => { membershipOutlierInsight.outlierMemberType = n.getEnumValue<OutlierMemberType>(OutlierMemberType); },
    }
}
