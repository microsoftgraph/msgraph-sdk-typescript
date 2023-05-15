import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createThreatAssessmentResultFromDiscriminatorValue} from './createThreatAssessmentResultFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentRequest(threatAssessmentRequest: ThreatAssessmentRequest | undefined = {} as ThreatAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(threatAssessmentRequest),
        "category": n => { threatAssessmentRequest.category = n.getEnumValue<ThreatCategory>(ThreatCategory); },
        "contentType": n => { threatAssessmentRequest.contentType = n.getEnumValue<ThreatAssessmentContentType>(ThreatAssessmentContentType); },
        "createdBy": n => { threatAssessmentRequest.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { threatAssessmentRequest.createdDateTime = n.getDateValue(); },
        "expectedAssessment": n => { threatAssessmentRequest.expectedAssessment = n.getEnumValue<ThreatExpectedAssessment>(ThreatExpectedAssessment); },
        "requestSource": n => { threatAssessmentRequest.requestSource = n.getEnumValue<ThreatAssessmentRequestSource>(ThreatAssessmentRequestSource); },
        "results": n => { threatAssessmentRequest.results = n.getCollectionOfObjectValues<ThreatAssessmentResult>(createThreatAssessmentResultFromDiscriminatorValue); },
        "status": n => { threatAssessmentRequest.status = n.getEnumValue<ThreatAssessmentStatus>(ThreatAssessmentStatus); },
    }
}
