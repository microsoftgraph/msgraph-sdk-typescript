import {DeviceActionResultImpl} from './index';
import {ResetPasscodeActionResult} from './resetPasscodeActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResetPasscodeActionResultImpl extends DeviceActionResultImpl implements ResetPasscodeActionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Newly generated passcode for the device */
    public passcode?: string | undefined;
    /**
     * Instantiates a new ResetPasscodeActionResult and sets the default values.
     * @param resetPasscodeActionResultParameterValue 
     */
    public constructor(resetPasscodeActionResultParameterValue?: ResetPasscodeActionResult | undefined) {
        super(resetPasscodeActionResultParameterValue);
        this.additionalData = resetPasscodeActionResultParameterValue?.additionalData ? resetPasscodeActionResultParameterValue?.additionalData! : {};
        this.passcode = resetPasscodeActionResultParameterValue?.passcode;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "passcode": n => { this.passcode = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.passcode){
            writer.writeStringValue("passcode", this.passcode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
