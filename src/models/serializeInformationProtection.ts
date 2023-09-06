import { type Bitlocker } from './bitlocker';
import { type InformationProtection } from './informationProtection';
import { serializeBitlocker } from './serializeBitlocker';
import { serializeThreatAssessmentRequest } from './serializeThreatAssessmentRequest';
import { type ThreatAssessmentRequest } from './threatAssessmentRequest';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInformationProtection(writer: SerializationWriter, informationProtection: InformationProtection | undefined = {} as InformationProtection) : void {
        writer.writeObjectValue<Bitlocker>("bitlocker", informationProtection.bitlocker, serializeBitlocker);
        writer.writeStringValue("@odata.type", informationProtection.odataType);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", informationProtection.threatAssessmentRequests, serializeThreatAssessmentRequest);
        writer.writeAdditionalData(informationProtection.additionalData);
}
