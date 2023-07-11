import {AverageComparativeScore} from './averageComparativeScore';
import {ControlScore} from './controlScore';
import {Entity} from './entity';
import {SecurityVendorInformation} from './securityVendorInformation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScore extends Entity, Parsable {
    /**
     * Active user count of the given tenant.
     */
    activeUserCount?: number | undefined;
    /**
     * Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
     */
    averageComparativeScores?: AverageComparativeScore[] | undefined;
    /**
     * GUID string for tenant ID.
     */
    azureTenantId?: string | undefined;
    /**
     * Contains tenant scores for a set of controls.
     */
    controlScores?: ControlScore[] | undefined;
    /**
     * The date when the entity is created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Tenant current attained score on specified date.
     */
    currentScore?: number | undefined;
    /**
     * Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
     */
    enabledServices?: string[] | undefined;
    /**
     * Licensed user count of the given tenant.
     */
    licensedUserCount?: number | undefined;
    /**
     * Tenant maximum possible score on specified date.
     */
    maxScore?: number | undefined;
    /**
     * Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
     */
    vendorInformation?: SecurityVendorInformation | undefined;
}
