import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartner extends Entity, Parsable {
    /**
     * User groups which enroll Android devices through partner.
     */
    androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /**
     * Partner onboarded for Android devices.
     */
    androidOnboarded?: boolean | undefined;
    /**
     * Partner display name
     */
    displayName?: string | undefined;
    /**
     * User groups which enroll ios devices through partner.
     */
    iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /**
     * Partner onboarded for ios devices.
     */
    iosOnboarded?: boolean | undefined;
    /**
     * Timestamp of last heartbeat after admin onboarded to the compliance management partner
     */
    lastHeartbeatDateTime?: Date | undefined;
    /**
     * User groups which enroll Mac devices through partner.
     */
    macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /**
     * Partner onboarded for Mac devices.
     */
    macOsOnboarded?: boolean | undefined;
    /**
     * Partner state of this tenant.
     */
    partnerState?: DeviceManagementPartnerTenantState | undefined;
}
