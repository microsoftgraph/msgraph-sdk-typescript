import { createDetailsInfoFromDiscriminatorValue } from './createDetailsInfoFromDiscriminatorValue';
import { type DetailsInfo } from './detailsInfo';
import { ProvisioningResult } from './provisioningResult';
import { type ProvisioningStep } from './provisioningStep';
import { ProvisioningStepType } from './provisioningStepType';
import { serializeDetailsInfo } from './serializeDetailsInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningStep(provisioningStep: ProvisioningStep | undefined = {} as ProvisioningStep) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { provisioningStep.description = n.getStringValue(); },
        "details": n => { provisioningStep.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
        "name": n => { provisioningStep.name = n.getStringValue(); },
        "@odata.type": n => { provisioningStep.odataType = n.getStringValue(); },
        "provisioningStepType": n => { provisioningStep.provisioningStepType = n.getEnumValue<ProvisioningStepType>(ProvisioningStepType); },
        "status": n => { provisioningStep.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
    }
}
