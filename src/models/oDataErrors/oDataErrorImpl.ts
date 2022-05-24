import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import {MainErrorImpl} from './index';
import {MainError} from './mainError';
import {ODataError} from './oDataError';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ODataErrorImpl extends ApiError implements AdditionalDataHolder, ODataError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error property */
    public error_escaped?: MainError | undefined;
    /**
     * Instantiates a new ODataError and sets the default values.
     * @param oDataErrorParameterValue 
     */
    public constructor(oDataErrorParameterValue?: ODataError | undefined) {
        super();
        this.additionalData = oDataErrorParameterValue?.additionalData ? oDataErrorParameterValue?.additionalData! : {}
        this.error_escaped = oDataErrorParameterValue?.error_escaped ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.error_escaped = n.getObjectValue<MainErrorImpl>(createMainErrorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.error_escaped){
        writer.writeObjectValue<MainErrorImpl>("error", new MainErrorImpl(this.error_escaped));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
