import { type EducationOnPremisesInfo } from './educationOnPremisesInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationOnPremisesInfo(writer: SerializationWriter, educationOnPremisesInfo: EducationOnPremisesInfo | undefined = {} as EducationOnPremisesInfo) : void {
        writer.writeStringValue("immutableId", educationOnPremisesInfo.immutableId);
        writer.writeStringValue("@odata.type", educationOnPremisesInfo.odataType);
        writer.writeAdditionalData(educationOnPremisesInfo.additionalData);
}
