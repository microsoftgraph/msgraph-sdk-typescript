import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {EntityImpl, TermsAndConditionsAcceptanceStatusImpl, TermsAndConditionsAssignmentImpl} from './index';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditionsImpl extends EntityImpl implements Parsable, TermsAndConditions {
    /** Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.  */
    acceptanceStatement?: string | undefined;
    /** The list of acceptance statuses for this T&C policy.  */
    acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[] | undefined;
    /** The list of assignments for this T&C policy.  */
    assignments?: TermsAndConditionsAssignment[] | undefined;
    /** Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.  */
    bodyText?: string | undefined;
    /** DateTime the object was created.  */
    createdDateTime?: Date | undefined;
    /** Administrator-supplied description of the T&C policy.  */
    description?: string | undefined;
    /** Administrator-supplied name for the T&C policy.  */
    displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    lastModifiedDateTime?: Date | undefined;
    /** Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.  */
    title?: string | undefined;
    /** Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.  */
    version?: number | undefined;
    /**
     * Instantiates a new termsAndConditions and sets the default values.
     * @param termsAndConditionsParameterValue 
     */
    public constructor(termsAndConditionsParameterValue?: TermsAndConditions | undefined) {
        super();
        this.acceptanceStatement = termsAndConditionsParameterValue?.acceptanceStatement ;
        this.acceptanceStatuses = termsAndConditionsParameterValue?.acceptanceStatuses ;
        this.assignments = termsAndConditionsParameterValue?.assignments ;
        this.bodyText = termsAndConditionsParameterValue?.bodyText ;
        this.createdDateTime = termsAndConditionsParameterValue?.createdDateTime ;
        this.description = termsAndConditionsParameterValue?.description ;
        this.displayName = termsAndConditionsParameterValue?.displayName ;
        this.lastModifiedDateTime = termsAndConditionsParameterValue?.lastModifiedDateTime ;
        this.title = termsAndConditionsParameterValue?.title ;
        this.version = termsAndConditionsParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptanceStatement": n => { this.acceptanceStatement = n.getStringValue(); },
            "acceptanceStatuses": n => { this.acceptanceStatuses = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
            "bodyText": n => { this.bodyText = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptanceStatement){
        if(this.acceptanceStatement)
        writer.writeStringValue("acceptanceStatement", this.acceptanceStatement);
        }
        if(this.acceptanceStatuses){
        const acceptanceStatusesArrValue: TermsAndConditionsAcceptanceStatusImpl[] = []; this.acceptanceStatuses?.forEach(element => {acceptanceStatusesArrValue.push(new TermsAndConditionsAcceptanceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>("acceptanceStatuses", acceptanceStatusesArrValue);
        }
        if(this.assignments){
        const assignmentsArrValue: TermsAndConditionsAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new TermsAndConditionsAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.bodyText){
        if(this.bodyText)
        writer.writeStringValue("bodyText", this.bodyText);
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        if(this.lastModifiedDateTime)
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.title){
        if(this.title)
        writer.writeStringValue("title", this.title);
        }
        if(this.version){
        if(this.version)
        writer.writeNumberValue("version", this.version);
        }
    };
}
