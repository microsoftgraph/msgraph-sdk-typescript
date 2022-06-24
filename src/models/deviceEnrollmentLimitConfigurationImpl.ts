import {DeviceEnrollmentLimitConfiguration} from './deviceEnrollmentLimitConfiguration';
import {DeviceEnrollmentConfigurationImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentLimitConfigurationImpl extends DeviceEnrollmentConfigurationImpl implements DeviceEnrollmentLimitConfiguration {
    /** The maximum number of devices that a user can enroll */
    public limit?: number | undefined;
    /**
     * Instantiates a new DeviceEnrollmentLimitConfiguration and sets the default values.
     * @param deviceEnrollmentLimitConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentLimitConfigurationParameterValue?: DeviceEnrollmentLimitConfiguration | undefined) {
        super(deviceEnrollmentLimitConfigurationParameterValue);
        this.limit = deviceEnrollmentLimitConfigurationParameterValue?.limit;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "limit": n => { this.limit = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.limit){
            writer.writeNumberValue("limit", this.limit);
        }
    };
}
