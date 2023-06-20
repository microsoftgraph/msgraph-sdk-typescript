import {EducationOutcome} from './educationOutcome';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {IdentitySet} from './identitySet';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSubmission(educationSubmission: EducationSubmission | undefined = {} as EducationSubmission, writer: SerializationWriter) : void {
        serializeEntity(writer, educationSubmission)
        writer.writeCollectionOfObjectValues<EducationOutcome>("outcomes", educationSubmission.outcomes, serializeEducationOutcome);
        writer.writeObjectValue<EducationSubmissionRecipient>("recipient", educationSubmission.recipient, serializeEducationSubmissionRecipient);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("resources", educationSubmission.resources, serializeEducationSubmissionResource);
        writer.writeCollectionOfObjectValues<EducationSubmissionResource>("submittedResources", educationSubmission.submittedResources, serializeEducationSubmissionResource);
}
