import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestorSettingsImpl implements AccessPackageAssignmentRequestorSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If false, the requestor is not permitted to include a schedule in their request. */
    private _allowCustomAssignmentSchedule?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to add access for another principal. */
    private _enableOnBehalfRequestorsToAddAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to remove access for another principal. */
    private _enableOnBehalfRequestorsToRemoveAccess?: boolean | undefined;
    /** If true, allows on-behalf-of requestors to create a request to update access for another principal. */
    private _enableOnBehalfRequestorsToUpdateAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to add access for themselves. */
    private _enableTargetsToSelfAddAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to remove their access. */
    private _enableTargetsToSelfRemoveAccess?: boolean | undefined;
    /** If true, allows requestors to create a request to update their access. */
    private _enableTargetsToSelfUpdateAccess?: boolean | undefined;
    /** The principals who can request on-behalf-of others. */
    private _onBehalfRequestors?: SubjectSet[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowCustomAssignmentSchedule property value. If false, the requestor is not permitted to include a schedule in their request.
     * @returns a boolean
     */
    public get allowCustomAssignmentSchedule() {
        return this._allowCustomAssignmentSchedule;
    };
    /**
     * Sets the allowCustomAssignmentSchedule property value. If false, the requestor is not permitted to include a schedule in their request.
     * @param value Value to set for the allowCustomAssignmentSchedule property.
     */
    public set allowCustomAssignmentSchedule(value: boolean | undefined) {
        if(value) {
            this._allowCustomAssignmentSchedule = value;
        }
    };
    /**
     * Instantiates a new accessPackageAssignmentRequestorSettings and sets the default values.
     * @param accessPackageAssignmentRequestorSettingsParameterValue 
     */
    public constructor(accessPackageAssignmentRequestorSettingsParameterValue?: AccessPackageAssignmentRequestorSettings | undefined) {
        this._additionalData = accessPackageAssignmentRequestorSettingsParameterValue?.additionalData ? accessPackageAssignmentRequestorSettingsParameterValue?.additionalData! : {};
        this._allowCustomAssignmentSchedule = accessPackageAssignmentRequestorSettingsParameterValue?.allowCustomAssignmentSchedule;
        this._enableOnBehalfRequestorsToAddAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToAddAccess;
        this._enableOnBehalfRequestorsToRemoveAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToRemoveAccess;
        this._enableOnBehalfRequestorsToUpdateAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableOnBehalfRequestorsToUpdateAccess;
        this._enableTargetsToSelfAddAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfAddAccess;
        this._enableTargetsToSelfRemoveAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfRemoveAccess;
        this._enableTargetsToSelfUpdateAccess = accessPackageAssignmentRequestorSettingsParameterValue?.enableTargetsToSelfUpdateAccess;
        this._onBehalfRequestors = accessPackageAssignmentRequestorSettingsParameterValue?.onBehalfRequestors;
    };
    /**
     * Gets the enableOnBehalfRequestorsToAddAccess property value. If true, allows on-behalf-of requestors to create a request to add access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToAddAccess() {
        return this._enableOnBehalfRequestorsToAddAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToAddAccess property value. If true, allows on-behalf-of requestors to create a request to add access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToAddAccess property.
     */
    public set enableOnBehalfRequestorsToAddAccess(value: boolean | undefined) {
        if(value) {
            this._enableOnBehalfRequestorsToAddAccess = value;
        }
    };
    /**
     * Gets the enableOnBehalfRequestorsToRemoveAccess property value. If true, allows on-behalf-of requestors to create a request to remove access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToRemoveAccess() {
        return this._enableOnBehalfRequestorsToRemoveAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToRemoveAccess property value. If true, allows on-behalf-of requestors to create a request to remove access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToRemoveAccess property.
     */
    public set enableOnBehalfRequestorsToRemoveAccess(value: boolean | undefined) {
        if(value) {
            this._enableOnBehalfRequestorsToRemoveAccess = value;
        }
    };
    /**
     * Gets the enableOnBehalfRequestorsToUpdateAccess property value. If true, allows on-behalf-of requestors to create a request to update access for another principal.
     * @returns a boolean
     */
    public get enableOnBehalfRequestorsToUpdateAccess() {
        return this._enableOnBehalfRequestorsToUpdateAccess;
    };
    /**
     * Sets the enableOnBehalfRequestorsToUpdateAccess property value. If true, allows on-behalf-of requestors to create a request to update access for another principal.
     * @param value Value to set for the enableOnBehalfRequestorsToUpdateAccess property.
     */
    public set enableOnBehalfRequestorsToUpdateAccess(value: boolean | undefined) {
        if(value) {
            this._enableOnBehalfRequestorsToUpdateAccess = value;
        }
    };
    /**
     * Gets the enableTargetsToSelfAddAccess property value. If true, allows requestors to create a request to add access for themselves.
     * @returns a boolean
     */
    public get enableTargetsToSelfAddAccess() {
        return this._enableTargetsToSelfAddAccess;
    };
    /**
     * Sets the enableTargetsToSelfAddAccess property value. If true, allows requestors to create a request to add access for themselves.
     * @param value Value to set for the enableTargetsToSelfAddAccess property.
     */
    public set enableTargetsToSelfAddAccess(value: boolean | undefined) {
        if(value) {
            this._enableTargetsToSelfAddAccess = value;
        }
    };
    /**
     * Gets the enableTargetsToSelfRemoveAccess property value. If true, allows requestors to create a request to remove their access.
     * @returns a boolean
     */
    public get enableTargetsToSelfRemoveAccess() {
        return this._enableTargetsToSelfRemoveAccess;
    };
    /**
     * Sets the enableTargetsToSelfRemoveAccess property value. If true, allows requestors to create a request to remove their access.
     * @param value Value to set for the enableTargetsToSelfRemoveAccess property.
     */
    public set enableTargetsToSelfRemoveAccess(value: boolean | undefined) {
        if(value) {
            this._enableTargetsToSelfRemoveAccess = value;
        }
    };
    /**
     * Gets the enableTargetsToSelfUpdateAccess property value. If true, allows requestors to create a request to update their access.
     * @returns a boolean
     */
    public get enableTargetsToSelfUpdateAccess() {
        return this._enableTargetsToSelfUpdateAccess;
    };
    /**
     * Sets the enableTargetsToSelfUpdateAccess property value. If true, allows requestors to create a request to update their access.
     * @param value Value to set for the enableTargetsToSelfUpdateAccess property.
     */
    public set enableTargetsToSelfUpdateAccess(value: boolean | undefined) {
        if(value) {
            this._enableTargetsToSelfUpdateAccess = value;
        }
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
     * Gets the onBehalfRequestors property value. The principals who can request on-behalf-of others.
     * @returns a SubjectSetInterface
     */
    public get onBehalfRequestors() {
        return this._onBehalfRequestors;
    };
    /**
     * Sets the onBehalfRequestors property value. The principals who can request on-behalf-of others.
     * @param value Value to set for the onBehalfRequestors property.
     */
    public set onBehalfRequestors(value: SubjectSet[] | undefined) {
        if(value) {
            const onBehalfRequestorsArrValue: SubjectSetImpl[] = [];
            this.onBehalfRequestors?.forEach(element => {
                onBehalfRequestorsArrValue.push((element instanceof SubjectSetImpl? element:new SubjectSetImpl(element)));
            });
            this._onBehalfRequestors = onBehalfRequestorsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCustomAssignmentSchedule){
            writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        }
        if(this.enableOnBehalfRequestorsToAddAccess){
            writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", this.enableOnBehalfRequestorsToAddAccess);
        }
        if(this.enableOnBehalfRequestorsToRemoveAccess){
            writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", this.enableOnBehalfRequestorsToRemoveAccess);
        }
        if(this.enableOnBehalfRequestorsToUpdateAccess){
            writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", this.enableOnBehalfRequestorsToUpdateAccess);
        }
        if(this.enableTargetsToSelfAddAccess){
            writer.writeBooleanValue("enableTargetsToSelfAddAccess", this.enableTargetsToSelfAddAccess);
        }
        if(this.enableTargetsToSelfRemoveAccess){
            writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", this.enableTargetsToSelfRemoveAccess);
        }
        if(this.enableTargetsToSelfUpdateAccess){
            writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", this.enableTargetsToSelfUpdateAccess);
        }
        if(this.onBehalfRequestors && this.onBehalfRequestors.length != 0){        const onBehalfRequestorsArrValue: SubjectSetImpl[] = [];
        this.onBehalfRequestors?.forEach(element => {
            onBehalfRequestorsArrValue.push((element instanceof SubjectSetImpl? element:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("onBehalfRequestors", onBehalfRequestorsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
