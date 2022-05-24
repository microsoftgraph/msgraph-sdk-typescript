import {ConvertIdResult} from './convertIdResult';
import {createGenericErrorFromDiscriminatorValue} from './createGenericErrorFromDiscriminatorValue';
import {GenericError} from './genericError';
import {GenericErrorImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConvertIdResultImpl implements AdditionalDataHolder, ConvertIdResult, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** An error object indicating the reason for the conversion failure. This value is not present if the conversion succeeded. */
    public errorDetails?: GenericError | undefined;
    /** The identifier that was converted. This value is the original, un-converted identifier. */
    public sourceId?: string | undefined;
    /** The converted identifier. This value is not present if the conversion failed. */
    public targetId?: string | undefined;
    /**
     * Instantiates a new convertIdResult and sets the default values.
     * @param convertIdResultParameterValue 
     */
    public constructor(convertIdResultParameterValue?: ConvertIdResult | undefined) {
        this.additionalData = convertIdResultParameterValue?.additionalData ? convertIdResultParameterValue?.additionalData! : {}
        this.errorDetails = convertIdResultParameterValue?.errorDetails ;
        this.sourceId = convertIdResultParameterValue?.sourceId ;
        this.targetId = convertIdResultParameterValue?.targetId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorDetails": n => { this.errorDetails = n.getObjectValue<GenericErrorImpl>(createGenericErrorFromDiscriminatorValue); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "targetId": n => { this.targetId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.errorDetails){
        writer.writeObjectValue<GenericErrorImpl>("errorDetails", new GenericErrorImpl(this.errorDetails));
        }
        if(this.sourceId){
        writer.writeStringValue("sourceId", this.sourceId);
        }
        if(this.targetId){
        writer.writeStringValue("targetId", this.targetId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
