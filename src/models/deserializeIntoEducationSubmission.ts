import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {createEducationSubmissionRecipientFromDiscriminatorValue} from './createEducationSubmissionRecipientFromDiscriminatorValue';
import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationOutcome} from './educationOutcome';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {IdentitySet} from './identitySet';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeEducationSubmissionRecipient} from './serializeEducationSubmissionRecipient';
import {serializeEducationSubmissionResource} from './serializeEducationSubmissionResource';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSubmission(educationSubmission: EducationSubmission | undefined = {} as EducationSubmission) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationSubmission),
        "outcomes": n => { educationSubmission.outcomes = n.getCollectionOfObjectValues<EducationOutcome>(createEducationOutcomeFromDiscriminatorValue); },
        "reassignedBy": n => { educationSubmission.reassignedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "reassignedDateTime": n => { educationSubmission.reassignedDateTime = n.getDateValue(); },
        "recipient": n => { educationSubmission.recipient = n.getObjectValue<EducationSubmissionRecipient>(createEducationSubmissionRecipientFromDiscriminatorValue); },
        "resources": n => { educationSubmission.resources = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); },
        "resourcesFolderUrl": n => { educationSubmission.resourcesFolderUrl = n.getStringValue(); },
        "returnedBy": n => { educationSubmission.returnedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "returnedDateTime": n => { educationSubmission.returnedDateTime = n.getDateValue(); },
        "status": n => { educationSubmission.status = n.getEnumValue<EducationSubmissionStatus>(EducationSubmissionStatus); },
        "submittedBy": n => { educationSubmission.submittedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "submittedDateTime": n => { educationSubmission.submittedDateTime = n.getDateValue(); },
        "submittedResources": n => { educationSubmission.submittedResources = n.getCollectionOfObjectValues<EducationSubmissionResource>(createEducationSubmissionResourceFromDiscriminatorValue); },
        "unsubmittedBy": n => { educationSubmission.unsubmittedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "unsubmittedDateTime": n => { educationSubmission.unsubmittedDateTime = n.getDateValue(); },
    }
}
