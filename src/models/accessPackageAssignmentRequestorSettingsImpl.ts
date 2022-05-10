import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestorSettingsImpl implements AccessPackageAssignmentRequestorSettings, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** If false, the requestor is not permitted to include a schedule in their request.  */
    allowCustomAssignmentSchedule?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to add access for another principal.  */
    enableOnBehalfRequestorsToAddAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to remove access for another principal.  */
    enableOnBehalfRequestorsToRemoveAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to update access for another principal.  */
    enableOnBehalfRequestorsToUpdateAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to add access for themselves.  */
    enableTargetsToSelfAddAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to remove their access.  */
    enableTargetsToSelfRemoveAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to update their access.  */
    enableTargetsToSelfUpdateAccess?: boolean | undefined;
    /** The principals who can request on-behalf-of others.  */
    onBehalfRequestors?: SubjectSet[] | undefined;
    /**
     * Instantiates a new accessPackageAssignmentRequestorSettings and sets the default values.
     * @param accessPackageAssignmentRequestorSettingsParameterValue 
     */
    public constructor(accessPackageAssignmentRequestorSettingsParameterValue?: AccessPackageAssignmentRequestorSettings | undefined) {
        this.additionalData = {};
        this.additionalData = accessPackageAssignmentRequestorSettingsParameterValue?.additionalData ? {} : accessPackageAssignmentRequestorSettingsParameterValue?.additionalData!
        this.allowCustomAssignmentSchedule = accessPackageAssignmentRequestorSettingsParameterValue?.allowCustomAssignmentSchedule ;
        this.enableOnBehalfRequestorsToAddAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToAddAccess ;
        this.enableOnBehalfRequestorsToRemoveAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToRemoveAccess ;
        this.enableOnBehalfRequestorsToUpdateAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToUpdateAccess ;
        this.enableTargetsToSelfAddAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfAddAccess ;
        this.enableTargetsToSelfRemoveAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfRemoveAccess ;
        this.enableTargetsToSelfUpdateAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfUpdateAccess ;
        this.onBehalfRequestors = accessPackageAssignmentRequestorSettingsParameterValue?.onBehalfRequestors ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomAssignmentSchedule": n => { this.allowCustomAssignmentSchedule = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToAddAccess": n => { this.enableOnBehalfRequestorsToAddAccess = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToRemoveAccess": n => { this.enableOnBehalfRequestorsToRemoveAccess = n.getBooleanValue(); },
            "enableOnBehalfRequestorsToUpdateAccess": n => { this.enableOnBehalfRequestorsToUpdateAccess = n.getBooleanValue(); },
            "enableTargetsToSelfAddAccess": n => { this.enableTargetsToSelfAddAccess = n.getBooleanValue(); },
            "enableTargetsToSelfRemoveAccess": n => { this.enableTargetsToSelfRemoveAccess = n.getBooleanValue(); },
            "enableTargetsToSelfUpdateAccess": n => { this.enableTargetsToSelfUpdateAccess = n.getBooleanValue(); },
            "onBehalfRequestors": n => { this.onBehalfRequestors = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCustomAssignmentSchedule){
        if(this.allowCustomAssignmentSchedule)
        writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        }
        if(this.enableOnBehalfRequestorsToAddAccess){
        if(this.enableOnBehalfRequestorsToAddAccess)
        writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", this.enableOnBehalfRequestorsToAddAccess);
        }
        if(this.enableOnBehalfRequestorsToRemoveAccess){
        if(this.enableOnBehalfRequestorsToRemoveAccess)
        writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", this.enableOnBehalfRequestorsToRemoveAccess);
        }
        if(this.enableOnBehalfRequestorsToUpdateAccess){
        if(this.enableOnBehalfRequestorsToUpdateAccess)
        writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", this.enableOnBehalfRequestorsToUpdateAccess);
        }
        if(this.enableTargetsToSelfAddAccess){
        if(this.enableTargetsToSelfAddAccess)
        writer.writeBooleanValue("enableTargetsToSelfAddAccess", this.enableTargetsToSelfAddAccess);
        }
        if(this.enableTargetsToSelfRemoveAccess){
        if(this.enableTargetsToSelfRemoveAccess)
        writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", this.enableTargetsToSelfRemoveAccess);
        }
        if(this.enableTargetsToSelfUpdateAccess){
        if(this.enableTargetsToSelfUpdateAccess)
        writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", this.enableTargetsToSelfUpdateAccess);
        }
        if(this.onBehalfRequestors){
        const onBehalfRequestorsArrValue: SubjectSetImpl[] = []; this.onBehalfRequestors?.forEach(element => {onBehalfRequestorsArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("onBehalfRequestors", onBehalfRequestorsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
