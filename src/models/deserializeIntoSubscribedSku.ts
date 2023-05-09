import {createLicenseUnitsDetailFromDiscriminatorValue} from './createLicenseUnitsDetailFromDiscriminatorValue';
import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {serializeLicenseUnitsDetail} from './serializeLicenseUnitsDetail';
import {serializeServicePlanInfo} from './serializeServicePlanInfo';
import {ServicePlanInfo} from './servicePlanInfo';
import {SubscribedSku} from './subscribedSku';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribedSku(subscribedSku: SubscribedSku | undefined = {} as SubscribedSku) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(subscribedSku),
        "appliesTo": n => { subscribedSku.appliesTo = n.getStringValue(); },
        "capabilityStatus": n => { subscribedSku.capabilityStatus = n.getStringValue(); },
        "consumedUnits": n => { subscribedSku.consumedUnits = n.getNumberValue(); },
        "prepaidUnits": n => { subscribedSku.prepaidUnits = n.getObjectValue<LicenseUnitsDetail>(createLicenseUnitsDetailFromDiscriminatorValue); },
        "servicePlans": n => { subscribedSku.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(createServicePlanInfoFromDiscriminatorValue); },
        "skuId": n => { subscribedSku.skuId = n.getStringValue(); },
        "skuPartNumber": n => { subscribedSku.skuPartNumber = n.getStringValue(); },
    }
}
