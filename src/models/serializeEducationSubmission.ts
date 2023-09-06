import { type EducationOutcome } from './educationOutcome';
import { type EducationSubmission } from './educationSubmission';
import { type EducationSubmissionRecipient } from './educationSubmissionRecipient';
import { type EducationSubmissionResource } from './educationSubmissionResource';
import { EducationSubmissionStatus } from './educationSubmissionStatus';
import { type IdentitySet } from './identitySet';
import { serializeEducationOutcome } from './serializeEducationOutcome';
import { serializeEducationSubmissionRecipient } from './serializeEducationSubmissionRecipient';
import { serializeEducationSubmissionResource } from './serializeEducationSubmissionResource';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationSubmission(writer: SerializationWriter, educationSubmission: EducationSubmission | undefined = {} as EducationSubmission) : void {
        serializeEntity(writer, educationSubmission)
        writer.writeCollectionOfObjectValues<EducationOutcome>("outcomes", educationSubmission.outcomes, serializeEducationOutcome);
        writer.writeObjectValue<EducationSubmissionRecipient>("recipient", educationSubmission.recipient, serializeEducationSubmissionRecipient);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("resources", educationSubmission.resources, serializeEducationSubmissionResource);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("submittedResources", educationSubmission.submittedResources, serializeEducationSubmissionResource);
}
