import {Entity} from './entity';
import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface SubscribedSku extends Entity, Parsable {
    /**
     * The unique ID of the account this SKU belongs to.
     */
    accountId?: string | undefined;
    /**
     * The name of the account this SKU belongs to.
     */
    accountName?: string | undefined;
    /**
     * The target class for this SKU. Only SKUs with target class User are assignable. Possible values are: 'User', 'Company'.
     */
    appliesTo?: string | undefined;
    /**
     * Enabled indicates that the prepaidUnits property has at least one unit that is enabled. LockedOut indicates that the customer cancelled their subscription. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut.
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
     * Information about the service plans that are available with the SKU. Not nullable.
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
