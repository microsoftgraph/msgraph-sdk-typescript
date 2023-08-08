import type {IdentitySet} from './identitySet';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import type {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import type {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThreatAssessmentRequest(writer: SerializationWriter, threatAssessmentRequest: ThreatAssessmentRequest | undefined = {} as ThreatAssessmentRequest) : void {
        serializeEntity(writer, threatAssessmentRequest)
        writer.writeEnumValue<ThreatCategory>("category", threatAssessmentRequest.category);
        writer.writeEnumValue<ThreatAssessmentContentType>("contentType", threatAssessmentRequest.contentType);
        writer.writeObjectValue<IdentitySet>("createdBy", threatAssessmentRequest.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", threatAssessmentRequest.createdDateTime);
        writer.writeEnumValue<ThreatExpectedAssessment>("expectedAssessment", threatAssessmentRequest.expectedAssessment);
        writer.writeEnumValue<ThreatAssessmentRequestSource>("requestSource", threatAssessmentRequest.requestSource);
        writer.writeCollectionOfObjectValues<ThreatAssessmentResult>("results", threatAssessmentRequest.results, serializeThreatAssessmentResult);
        writer.writeEnumValue<ThreatAssessmentStatus>("status", threatAssessmentRequest.status);
}
