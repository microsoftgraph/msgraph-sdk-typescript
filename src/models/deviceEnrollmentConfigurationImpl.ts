import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from './createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {DeviceEnrollmentConfiguration} from './deviceEnrollmentConfiguration';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {EnrollmentConfigurationAssignmentImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Base Class of Device Enrollment Configuration */
export class DeviceEnrollmentConfigurationImpl extends EntityImpl implements DeviceEnrollmentConfiguration, Parsable {
    /** The list of group assignments for the device configuration profile */
    public assignments?: EnrollmentConfigurationAssignment[] | undefined;
    /** Created date time in UTC of the device enrollment configuration */
    public createdDateTime?: Date | undefined;
    /** The description of the device enrollment configuration */
    public description?: string | undefined;
    /** The display name of the device enrollment configuration */
    public displayName?: string | undefined;
    /** Last modified date time in UTC of the device enrollment configuration */
    public lastModifiedDateTime?: Date | undefined;
    /** Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value. */
    public priority?: number | undefined;
    /** The version of the device enrollment configuration */
    public version?: number | undefined;
    /**
     * Instantiates a new deviceEnrollmentConfiguration and sets the default values.
     * @param deviceEnrollmentConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentConfigurationParameterValue?: DeviceEnrollmentConfiguration | undefined) {
        super();
        this.assignments = deviceEnrollmentConfigurationParameterValue?.assignments ;
        this.createdDateTime = deviceEnrollmentConfigurationParameterValue?.createdDateTime ;
        this.description = deviceEnrollmentConfigurationParameterValue?.description ;
        this.displayName = deviceEnrollmentConfigurationParameterValue?.displayName ;
        this.lastModifiedDateTime = deviceEnrollmentConfigurationParameterValue?.lastModifiedDateTime ;
        this.priority = deviceEnrollmentConfigurationParameterValue?.priority ;
        this.version = deviceEnrollmentConfigurationParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new EnrollmentConfigurationAssignmentImpl(element));});
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
}
