import {Entity} from './entity';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface LicenseDetails extends Entity, Parsable {
    /**
     * Information about the service plans assigned with the license. Read-only, Not nullable
     */
    servicePlans?: ServicePlanInfo[] | undefined;
    /**
     * Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
     */
    skuId?: Guid | undefined;
    /**
     * Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
     */
    skuPartNumber?: string | undefined;
}
