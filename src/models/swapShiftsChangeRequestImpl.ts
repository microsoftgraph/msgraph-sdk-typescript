import {OfferShiftRequestImpl} from './index';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SwapShiftsChangeRequestImpl extends OfferShiftRequestImpl implements SwapShiftsChangeRequest {
    /** Shift ID for the recipient user with whom the request is to swap. */
    private _recipientShiftId?: string | undefined;
    /**
     * Instantiates a new SwapShiftsChangeRequest and sets the default values.
     * @param swapShiftsChangeRequestParameterValue 
     */
    public constructor(swapShiftsChangeRequestParameterValue?: SwapShiftsChangeRequest | undefined) {
        super(swapShiftsChangeRequestParameterValue);
        this._recipientShiftId = swapShiftsChangeRequestParameterValue?.recipientShiftId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recipientShiftId": n => { this.recipientShiftId = n.getStringValue(); },
        };
    };
    /**
     * Gets the recipientShiftId property value. Shift ID for the recipient user with whom the request is to swap.
     * @returns a string
     */
    public get recipientShiftId() {
        return this._recipientShiftId;
    };
    /**
     * Sets the recipientShiftId property value. Shift ID for the recipient user with whom the request is to swap.
     * @param value Value to set for the recipientShiftId property.
     */
    public set recipientShiftId(value: string | undefined) {
        if(value) {
            this._recipientShiftId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recipientShiftId){
            writer.writeStringValue("recipientShiftId", this.recipientShiftId);
        }
    };
}
