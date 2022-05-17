import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {createEducationSubmissionRecipientFromDiscriminatorValue} from './createEducationSubmissionRecipientFromDiscriminatorValue';
import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationOutcome} from './educationOutcome';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {IdentitySet} from './identitySet';
import {EducationOutcomeImpl, EducationSubmissionRecipientImpl, EducationSubmissionResourceImpl, EntityImpl, IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionImpl extends EntityImpl implements EducationSubmission, Parsable {
    /** Read-Write. Nullable. */
    outcomes?: EducationOutcome[] | undefined;
    /** User who moved the status of this submission to reassigned. */
    reassignedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    reassignedDateTime?: Date | undefined;
    /** Who this submission is assigned to. */
    recipient?: EducationSubmissionRecipient | undefined;
    /** Nullable. */
    resources?: EducationSubmissionResource[] | undefined;
    /** Folder where all file resources for this submission need to be stored. */
    resourcesFolderUrl?: string | undefined;
    /** User who moved the status of this submission to returned. */
    returnedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    returnedDateTime?: Date | undefined;
    /** Read-only. Possible values are: working, submitted, released, returned, unknownFutureValue and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned. */
    status?: EducationSubmissionStatus | undefined;
    /** User who moved the resource into the submitted state. */
    submittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    submittedDateTime?: Date | undefined;
    /** Read-only. Nullable. */
    submittedResources?: EducationSubmissionResource[] | undefined;
    /** User who moved the resource from submitted into the working state. */
    unsubmittedBy?: IdentitySet | undefined;
    /** Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    unsubmittedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationSubmission and sets the default values.
     * @param educationSubmissionParameterValue 
     */
    public constructor(educationSubmissionParameterValue?: EducationSubmission | undefined) {
        super();
        this.outcomes = educationSubmissionParameterValue?.outcomes ;
        this.reassignedBy = educationSubmissionParameterValue?.reassignedBy ;
        this.reassignedDateTime = educationSubmissionParameterValue?.reassignedDateTime ;
        this.recipient = educationSubmissionParameterValue?.recipient ;
        this.resources = educationSubmissionParameterValue?.resources ;
        this.resourcesFolderUrl = educationSubmissionParameterValue?.resourcesFolderUrl ;
        this.returnedBy = educationSubmissionParameterValue?.returnedBy ;
        this.returnedDateTime = educationSubmissionParameterValue?.returnedDateTime ;
        this.status = educationSubmissionParameterValue?.status ;
        this.submittedBy = educationSubmissionParameterValue?.submittedBy ;
        this.submittedDateTime = educationSubmissionParameterValue?.submittedDateTime ;
        this.submittedResources = educationSubmissionParameterValue?.submittedResources ;
        this.unsubmittedBy = educationSubmissionParameterValue?.unsubmittedBy ;
        this.unsubmittedDateTime = educationSubmissionParameterValue?.unsubmittedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "outcomes": n => { this.outcomes = n.getCollectionOfObjectValues<EducationOutcomeImpl>(createEducationOutcomeFromDiscriminatorValue); },
            "reassignedBy": n => { this.reassignedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "reassignedDateTime": n => { this.reassignedDateTime = n.getDateValue(); },
            "recipient": n => { this.recipient = n.getObjectValue<EducationSubmissionRecipientImpl>(createEducationSubmissionRecipientFromDiscriminatorValue); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<EducationSubmissionResourceImpl>(createEducationSubmissionResourceFromDiscriminatorValue); },
            "resourcesFolderUrl": n => { this.resourcesFolderUrl = n.getStringValue(); },
            "returnedBy": n => { this.returnedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "returnedDateTime": n => { this.returnedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<EducationSubmissionStatus>(EducationSubmissionStatus); },
            "submittedBy": n => { this.submittedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "submittedDateTime": n => { this.submittedDateTime = n.getDateValue(); },
            "submittedResources": n => { this.submittedResources = n.getCollectionOfObjectValues<EducationSubmissionResourceImpl>(createEducationSubmissionResourceFromDiscriminatorValue); },
            "unsubmittedBy": n => { this.unsubmittedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "unsubmittedDateTime": n => { this.unsubmittedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.outcomes){
        const outcomesArrValue: EducationOutcomeImpl[] = []; this.outcomes?.forEach(element => {outcomesArrValue.push(new EducationOutcomeImpl(element));});
        writer.writeCollectionOfObjectValues<EducationOutcomeImpl>("outcomes", outcomesArrValue);
        }
        if(this.reassignedBy){
        if(this.reassignedBy)
        writer.writeObjectValue<IdentitySetImpl>("reassignedBy", new IdentitySetImpl(this.reassignedBy));
        }
        if(this.reassignedDateTime){
        if(this.reassignedDateTime)
        writer.writeDateValue("reassignedDateTime", this.reassignedDateTime);
        }
        if(this.recipient){
        if(this.recipient)
        writer.writeObjectValue<EducationSubmissionRecipientImpl>("recipient", new EducationSubmissionRecipientImpl(this.recipient));
        }
        if(this.resources){
        const resourcesArrValue: EducationSubmissionResourceImpl[] = []; this.resources?.forEach(element => {resourcesArrValue.push(new EducationSubmissionResourceImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSubmissionResourceImpl>("resources", resourcesArrValue);
        }
        if(this.resourcesFolderUrl){
        if(this.resourcesFolderUrl)
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        }
        if(this.returnedBy){
        if(this.returnedBy)
        writer.writeObjectValue<IdentitySetImpl>("returnedBy", new IdentitySetImpl(this.returnedBy));
        }
        if(this.returnedDateTime){
        if(this.returnedDateTime)
        writer.writeDateValue("returnedDateTime", this.returnedDateTime);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<EducationSubmissionStatus>("status", this.status);
        }
        if(this.submittedBy){
        if(this.submittedBy)
        writer.writeObjectValue<IdentitySetImpl>("submittedBy", new IdentitySetImpl(this.submittedBy));
        }
        if(this.submittedDateTime){
        if(this.submittedDateTime)
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        }
        if(this.submittedResources){
        const submittedResourcesArrValue: EducationSubmissionResourceImpl[] = []; this.submittedResources?.forEach(element => {submittedResourcesArrValue.push(new EducationSubmissionResourceImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSubmissionResourceImpl>("submittedResources", submittedResourcesArrValue);
        }
        if(this.unsubmittedBy){
        if(this.unsubmittedBy)
        writer.writeObjectValue<IdentitySetImpl>("unsubmittedBy", new IdentitySetImpl(this.unsubmittedBy));
        }
        if(this.unsubmittedDateTime){
        if(this.unsubmittedDateTime)
        writer.writeDateValue("unsubmittedDateTime", this.unsubmittedDateTime);
        }
    };
}
