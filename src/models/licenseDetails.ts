import {Entity} from './entity';
import {ServicePlanInfo} from './servicePlanInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseDetails extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Information about the service plans assigned with the license. Read-only, Not nullable */
    servicePlans?: ServicePlanInfo[] | undefined;
    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only */
    skuId?: string | undefined;
    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only */
    skuPartNumber?: string | undefined;
}
