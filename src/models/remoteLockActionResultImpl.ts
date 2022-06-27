import {DeviceActionResultImpl} from './index';
import {RemoteLockActionResult} from './remoteLockActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteLockActionResultImpl extends DeviceActionResultImpl implements RemoteLockActionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Pin to unlock the client */
    public unlockPin?: string | undefined;
    /**
     * Instantiates a new RemoteLockActionResult and sets the default values.
     * @param remoteLockActionResultParameterValue 
     */
    public constructor(remoteLockActionResultParameterValue?: RemoteLockActionResult | undefined) {
        super(remoteLockActionResultParameterValue);
        this.additionalData = remoteLockActionResultParameterValue?.additionalData ? remoteLockActionResultParameterValue?.additionalData! : {};
        this.unlockPin = remoteLockActionResultParameterValue?.unlockPin;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "unlockPin": n => { this.unlockPin = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.unlockPin){
            writer.writeStringValue("unlockPin", this.unlockPin);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
