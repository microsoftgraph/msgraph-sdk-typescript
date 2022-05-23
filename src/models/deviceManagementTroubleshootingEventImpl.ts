import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Event representing an general failure. */
export class DeviceManagementTroubleshootingEventImpl extends EntityImpl implements DeviceManagementTroubleshootingEvent, Parsable {
    /** Id used for tracing the failure in the service. */
    public correlationId?: string | undefined;
    /** Time when the event occurred . */
    public eventDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceManagementTroubleshootingEvent and sets the default values.
     * @param deviceManagementTroubleshootingEventParameterValue 
     */
    public constructor(deviceManagementTroubleshootingEventParameterValue?: DeviceManagementTroubleshootingEvent | undefined) {
        super();
        this.correlationId = deviceManagementTroubleshootingEventParameterValue?.correlationId ;
        this.eventDateTime = deviceManagementTroubleshootingEventParameterValue?.eventDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.correlationId){
        writer.writeStringValue("correlationId", this.correlationId);
        }
        if(this.eventDateTime){
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        }
    };
}
