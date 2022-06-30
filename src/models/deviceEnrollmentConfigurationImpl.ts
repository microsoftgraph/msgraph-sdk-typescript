import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from './createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {EnrollmentConfigurationAssignmentImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Base Class of Device Enrollment Configuration */
export class DeviceEnrollmentConfigurationImpl extends EntityImpl implements DeviceEnrollmentConfiguration {
    /** The list of group assignments for the device configuration profile */
    private _assignments?: EnrollmentConfigurationAssignment[] | undefined;
    /** Created date time in UTC of the device enrollment configuration */
    private _createdDateTime?: Date | undefined;
    /** The description of the device enrollment configuration */
    private _description?: string | undefined;
    /** The display name of the device enrollment configuration */
    private _displayName?: string | undefined;
    /** Last modified date time in UTC of the device enrollment configuration */
    private _lastModifiedDateTime?: Date | undefined;
    /** Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value. */
    private _priority?: number | undefined;
    /** The version of the device enrollment configuration */
    private _version?: number | undefined;
    /**
     * Gets the assignments property value. The list of group assignments for the device configuration profile
     * @returns a EnrollmentConfigurationAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of group assignments for the device configuration profile
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EnrollmentConfigurationAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof EnrollmentConfigurationAssignmentImpl? element:new EnrollmentConfigurationAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new deviceEnrollmentConfiguration and sets the default values.
     * @param deviceEnrollmentConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentConfigurationParameterValue?: DeviceEnrollmentConfiguration | undefined) {
        super(deviceEnrollmentConfigurationParameterValue);
        this._assignments = deviceEnrollmentConfigurationParameterValue?.assignments;
        this._createdDateTime = deviceEnrollmentConfigurationParameterValue?.createdDateTime;
        this._description = deviceEnrollmentConfigurationParameterValue?.description;
        this._displayName = deviceEnrollmentConfigurationParameterValue?.displayName;
        this._lastModifiedDateTime = deviceEnrollmentConfigurationParameterValue?.lastModifiedDateTime;
        this._priority = deviceEnrollmentConfigurationParameterValue?.priority;
        this._version = deviceEnrollmentConfigurationParameterValue?.version;
    };
    /**
     * Gets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The description of the device enrollment configuration
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the device enrollment configuration
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name of the device enrollment configuration
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the device enrollment configuration
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        if(value) {
            this._priority = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof EnrollmentConfigurationAssignmentImpl? element:new EnrollmentConfigurationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.priority){
            writer.writeNumberValue("priority", this.priority);
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the version property value. The version of the device enrollment configuration
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version of the device enrollment configuration
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
