import {DirectoryObject} from './directoryObject';
import {GovernanceInsight} from './governanceInsight';
import {OutlierContainerType} from './outlierContainerType';
import {OutlierMemberType} from './outlierMemberType';
import {User} from './user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MembershipOutlierInsight extends GovernanceInsight, Parsable {
    /**
     * Navigation link to the container directory object. For example, to a group.
     */
    container?: DirectoryObject | undefined;
    /**
     * Indicates the identifier of the container, for example, a group ID.
     */
    containerId?: string | undefined;
    /**
     * Navigation link to a member object who modified the record. For example, to a user.
     */
    lastModifiedBy?: User | undefined;
    /**
     * Navigation link to a member object. For example, to a user.
     */
    member?: DirectoryObject | undefined;
    /**
     * Indicates the identifier of the user.
     */
    memberId?: string | undefined;
    /**
     * The outlierContainerType property
     */
    outlierContainerType?: OutlierContainerType | undefined;
    /**
     * The outlierMemberType property
     */
    outlierMemberType?: OutlierMemberType | undefined;
}
