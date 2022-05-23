import {OfferShiftRequestImpl} from './index';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class SwapShiftsChangeRequestImpl extends OfferShiftRequestImpl implements Parsable, SwapShiftsChangeRequest {
    /** Shift ID for the recipient user with whom the request is to swap. */
    public recipientShiftId?: string | undefined;
    /**
     * Instantiates a new swapShiftsChangeRequest and sets the default values.
     * @param swapShiftsChangeRequestParameterValue 
     */
    public constructor(swapShiftsChangeRequestParameterValue?: SwapShiftsChangeRequest | undefined) {
        super();
        this.recipientShiftId = swapShiftsChangeRequestParameterValue?.recipientShiftId ;
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
