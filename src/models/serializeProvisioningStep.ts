import {DetailsInfo} from './detailsInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStep} from './provisioningStep';
import {ProvisioningStepType} from './provisioningStepType';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningStep(writer: SerializationWriter, provisioningStep: ProvisioningStep | undefined = {} as ProvisioningStep) : void {
        writer.writeStringValue("description", provisioningStep.description);
        writer.writeObjectValue<DetailsInfo>("details", provisioningStep.details, serializeDetailsInfo);
        writer.writeStringValue("name", provisioningStep.name);
        writer.writeStringValue("@odata.type", provisioningStep.odataType);
        writer.writeEnumValue<ProvisioningStepType>("provisioningStepType", provisioningStep.provisioningStepType);
        writer.writeEnumValue<ProvisioningResult>("status", provisioningStep.status);
        writer.writeAdditionalData(provisioningStep.additionalData);
}
