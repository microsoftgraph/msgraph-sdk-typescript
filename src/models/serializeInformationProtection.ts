import {Bitlocker} from './bitlocker';
import {InformationProtection} from './informationProtection';
import {serializeBitlocker} from './serializeBitlocker';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtection(informationProtection: InformationProtection | undefined = {} as InformationProtection, writer: SerializationWriter) : void {
        writer.writeObjectValue<Bitlocker>("bitlocker", informationProtection.bitlocker, serializeBitlocker);
        writer.writeStringValue("@odata.type", informationProtection.odataType);
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequest>("threatAssessmentRequests", informationProtection.threatAssessmentRequests, serializeThreatAssessmentRequest);
        writer.writeAdditionalData(informationProtection.additionalData);
}
