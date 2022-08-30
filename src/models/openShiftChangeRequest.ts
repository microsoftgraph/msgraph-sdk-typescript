import {ScheduleChangeRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftChangeRequest extends ScheduleChangeRequest implements Parsable {
    /** ID for the open shift. */
    private _openShiftId?: string | undefined;
    /**
     * Instantiates a new OpenShiftChangeRequest and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.openShiftChangeRequest";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "openShiftId": n => { this.openShiftId = n.getStringValue(); },
        };
    };
    /**
     * Gets the openShiftId property value. ID for the open shift.
     * @returns a string
     */
    public get openShiftId() {
        return this._openShiftId;
    };
    /**
     * Sets the openShiftId property value. ID for the open shift.
     * @param value Value to set for the openShiftId property.
     */
    public set openShiftId(value: string | undefined) {
        this._openShiftId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("openShiftId", this.openShiftId);
    };
}
