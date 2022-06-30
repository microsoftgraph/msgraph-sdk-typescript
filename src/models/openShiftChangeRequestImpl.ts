import {ScheduleChangeRequestImpl} from './index';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftChangeRequestImpl extends ScheduleChangeRequestImpl implements OpenShiftChangeRequest {
    /** ID for the open shift. */
    private _openShiftId?: string | undefined;
    /**
     * Instantiates a new OpenShiftChangeRequest and sets the default values.
     * @param openShiftChangeRequestParameterValue 
     */
    public constructor(openShiftChangeRequestParameterValue?: OpenShiftChangeRequest | undefined) {
        super(openShiftChangeRequestParameterValue);
        this._openShiftId = openShiftChangeRequestParameterValue?.openShiftId;
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
        if(value) {
            this._openShiftId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.openShiftId){
            writer.writeStringValue("openShiftId", this.openShiftId);
        }
    };
}
