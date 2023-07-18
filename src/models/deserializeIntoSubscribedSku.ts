import {createLicenseUnitsDetailFromDiscriminatorValue} from './createLicenseUnitsDetailFromDiscriminatorValue';
import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {serializeLicenseUnitsDetail} from './serializeLicenseUnitsDetail';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {ServicePlanInfo} from './servicePlanInfo';
import {SubscribedSku} from './subscribedSku';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoSubscribedSku(subscribedSku: SubscribedSku | undefined = {} as SubscribedSku) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subscribedSku),
        "accountId": n => { subscribedSku.accountId = n.getStringValue(); },
        "accountName": n => { subscribedSku.accountName = n.getStringValue(); },
        "appliesTo": n => { subscribedSku.appliesTo = n.getStringValue(); },
        "capabilityStatus": n => { subscribedSku.capabilityStatus = n.getStringValue(); },
        "consumedUnits": n => { subscribedSku.consumedUnits = n.getNumberValue(); },
        "prepaidUnits": n => { subscribedSku.prepaidUnits = n.getObjectValue<LicenseUnitsDetail>(createLicenseUnitsDetailFromDiscriminatorValue); },
        "servicePlans": n => { subscribedSku.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(createServicePlanInfoFromDiscriminatorValue); },
        "skuId": n => { subscribedSku.skuId = n.getGuidValue(); },
        "skuPartNumber": n => { subscribedSku.skuPartNumber = n.getStringValue(); },
        "subscriptionIds": n => { subscribedSku.subscriptionIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
