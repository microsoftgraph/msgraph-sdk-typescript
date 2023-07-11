import {DirectoryObject} from './directoryObject';
import {MembershipOutlierInsight} from './membershipOutlierInsight';
import {OutlierContainerType} from './outlierContainerType';
import {OutlierMemberType} from './outlierMemberType';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMembershipOutlierInsight(writer: SerializationWriter, membershipOutlierInsight: MembershipOutlierInsight | undefined = {} as MembershipOutlierInsight) : void {
        serializeGovernanceInsight(writer, membershipOutlierInsight)
        writer.writeObjectValue<DirectoryObject>("container", membershipOutlierInsight.container, serializeDirectoryObject);
        writer.writeStringValue("containerId", membershipOutlierInsight.containerId);
        writer.writeObjectValue<User>("lastModifiedBy", membershipOutlierInsight.lastModifiedBy, serializeUser);
        writer.writeObjectValue<DirectoryObject>("member", membershipOutlierInsight.member, serializeDirectoryObject);
        writer.writeStringValue("memberId", membershipOutlierInsight.memberId);
        writer.writeEnumValue<OutlierContainerType>("outlierContainerType", membershipOutlierInsight.outlierContainerType);
        writer.writeEnumValue<OutlierMemberType>("outlierMemberType", membershipOutlierInsight.outlierMemberType);
}
