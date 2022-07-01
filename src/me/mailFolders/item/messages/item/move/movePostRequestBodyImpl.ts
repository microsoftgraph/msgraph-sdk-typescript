import {MovePostRequestBody} from './movePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the move method. */
export class MovePostRequestBodyImpl implements MovePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The DestinationId property */
    private _destinationId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new movePostRequestBody and sets the default values.
     * @param movePostRequestBodyParameterValue 
     */
    public constructor(movePostRequestBodyParameterValue?: MovePostRequestBody | undefined) {
        this._additionalData = movePostRequestBodyParameterValue?.additionalData ? movePostRequestBodyParameterValue?.additionalData! : {};
        this._destinationId = movePostRequestBodyParameterValue?.destinationId;
    };
    /**
     * Gets the destinationId property value. The DestinationId property
     * @returns a string
     */
    public get destinationId() {
        return this._destinationId;
    };
    /**
     * Sets the destinationId property value. The DestinationId property
     * @param value Value to set for the DestinationId property.
     */
    public set destinationId(value: string | undefined) {
        if(value) {
            this._destinationId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationId": n => { this.destinationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.destinationId){
            writer.writeStringValue("destinationId", this.destinationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
