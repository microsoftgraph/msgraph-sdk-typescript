import {ServicePlanInfo} from './servicePlanInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoServicePlanInfo(servicePlanInfo: ServicePlanInfo | undefined = {} as ServicePlanInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "appliesTo": n => { servicePlanInfo.appliesTo = n.getStringValue(); },
        "@odata.type": n => { servicePlanInfo.odataType = n.getStringValue(); },
        "provisioningStatus": n => { servicePlanInfo.provisioningStatus = n.getStringValue(); },
        "servicePlanId": n => { servicePlanInfo.servicePlanId = n.getGuidValue(); },
        "servicePlanName": n => { servicePlanInfo.servicePlanName = n.getStringValue(); },
    }
}
