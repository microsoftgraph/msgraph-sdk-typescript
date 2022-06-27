import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {EntityImpl, JsonImpl} from './index';
import {Json} from './json';
import {WorkbookFunctionResult} from './workbookFunctionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFunctionResultImpl extends EntityImpl implements WorkbookFunctionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error property */
    public error_escaped?: string | undefined;
    /** The value property */
    public value?: Json | undefined;
    /**
     * Instantiates a new WorkbookFunctionResult and sets the default values.
     * @param workbookFunctionResultParameterValue 
     */
    public constructor(workbookFunctionResultParameterValue?: WorkbookFunctionResult | undefined) {
        super(workbookFunctionResultParameterValue);
        this.additionalData = workbookFunctionResultParameterValue?.additionalData ? workbookFunctionResultParameterValue?.additionalData! : {};
        this.error_escaped = workbookFunctionResultParameterValue?.error_escaped;
        this.value = workbookFunctionResultParameterValue?.value instanceof JsonImpl? workbookFunctionResultParameterValue?.value:new JsonImpl(workbookFunctionResultParameterValue?.value);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getStringValue(); },
            "value": n => { this.value = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.error_escaped){
            writer.writeStringValue("error", this.error_escaped);
        }
        if(this.value){
            writer.writeObjectValue<JsonImpl>("value", new JsonImpl(this.value));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
