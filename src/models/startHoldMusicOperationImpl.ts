import {CommsOperationImpl} from './index';
import {StartHoldMusicOperation} from './startHoldMusicOperation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StartHoldMusicOperationImpl extends CommsOperationImpl implements StartHoldMusicOperation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new StartHoldMusicOperation and sets the default values.
     * @param startHoldMusicOperationParameterValue 
     */
    public constructor(startHoldMusicOperationParameterValue?: StartHoldMusicOperation | undefined) {
        super(startHoldMusicOperationParameterValue);
        this.additionalData = startHoldMusicOperationParameterValue?.additionalData ? startHoldMusicOperationParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
