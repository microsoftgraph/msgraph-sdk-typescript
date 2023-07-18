import {Entity} from './entity';
import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface SubscribedSku extends Entity, Parsable {
    /**
     * The accountId property
     */
    accountId?: string | undefined;
    /**
     * The accountName property
     */
    accountName?: string | undefined;
    /**
     * For example, 'User' or 'Company'.
     */
    appliesTo?: string | undefined;
    /**
     * Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
     */
    capabilityStatus?: string | undefined;
    /**
     * The number of licenses that have been assigned.
     */
    consumedUnits?: number | undefined;
    /**
     * Information about the number and status of prepaid licenses.
     */
    prepaidUnits?: LicenseUnitsDetail | undefined;
    /**
     * Information about the service plans that are available with the SKU. Not nullable
     */
    servicePlans?: ServicePlanInfo[] | undefined;
    /**
     * The unique identifier (GUID) for the service SKU.
     */
    skuId?: Guid | undefined;
    /**
     * The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
     */
    skuPartNumber?: string | undefined;
    /**
     * The subscriptionIds property
     */
    subscriptionIds?: string[] | undefined;
}
