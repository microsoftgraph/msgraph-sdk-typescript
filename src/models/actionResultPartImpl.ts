import {ActionResultPart} from './actionResultPart';
import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {PublicErrorImpl} from './index';
import {PublicError} from './publicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActionResultPartImpl implements ActionResultPart, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error that occurred, if any, during the course of the bulk operation. */
    public error_escaped?: PublicError | undefined;
    /**
     * Instantiates a new actionResultPart and sets the default values.
     * @param actionResultPartParameterValue 
     */
    public constructor(actionResultPartParameterValue?: ActionResultPart | undefined) {
        this.additionalData = actionResultPartParameterValue?.additionalData ? actionResultPartParameterValue?.additionalData! : {}
        this.error_escaped = actionResultPartParameterValue?.error_escaped ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.error_escaped){
        writer.writeObjectValue<PublicErrorImpl>("error", new PublicErrorImpl(this.error_escaped));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
