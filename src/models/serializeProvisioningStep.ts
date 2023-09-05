import { type DetailsInfo } from './detailsInfo';
import { ProvisioningResult } from './provisioningResult';
import { type ProvisioningStep } from './provisioningStep';
import { ProvisioningStepType } from './provisioningStepType';
import { serializeDetailsInfo } from './serializeDetailsInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisioningStep(writer: SerializationWriter, provisioningStep: ProvisioningStep | undefined = {} as ProvisioningStep) : void {
        writer.writeStringValue("description", provisioningStep.description);
        writer.writeObjectValue<DetailsInfo>("details", provisioningStep.details, serializeDetailsInfo);
        writer.writeStringValue("name", provisioningStep.name);
        writer.writeStringValue("@odata.type", provisioningStep.odataType);
        writer.writeEnumValue<ProvisioningStepType>("provisioningStepType", provisioningStep.provisioningStepType);
        writer.writeEnumValue<ProvisioningResult>("status", provisioningStep.status);
        writer.writeAdditionalData(provisioningStep.additionalData);
}
