import {DeviceEnrollmentConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration implements Parsable {
    /** The maximum number of devices that a user can enroll */
    private _limit?: number | undefined;
    /**
     * Instantiates a new DeviceEnrollmentLimitConfiguration and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the limit property value. The maximum number of devices that a user can enroll
     * @returns a integer
     */
    public get limit() {
        return this._limit;
    };
    /**
     * Sets the limit property value. The maximum number of devices that a user can enroll
     * @param value Value to set for the limit property.
     */
    public set limit(value: number | undefined) {
        this._limit = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("limit", this.limit);
    };
}
