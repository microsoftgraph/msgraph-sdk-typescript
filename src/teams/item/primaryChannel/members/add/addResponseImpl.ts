import {ActionResultPartImpl} from '../../../../../models/';
import {ActionResultPart} from '../../../../../models/actionResultPart';
import {createActionResultPartFromDiscriminatorValue} from '../../../../../models/createActionResultPartFromDiscriminatorValue';
import {AddResponse} from './addResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method. */
export class AddResponseImpl implements AddResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ActionResultPart[] | undefined;
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
     * Instantiates a new addResponse and sets the default values.
     * @param addResponseParameterValue 
     */
    public constructor(addResponseParameterValue?: AddResponse | undefined) {
        this._additionalData = addResponseParameterValue?.additionalData ? addResponseParameterValue?.additionalData! : {};
        this._value = addResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ActionResultPartImpl>(createActionResultPartFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ActionResultPartImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ActionResultPartImpl? element:new ActionResultPartImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ActionResultPartImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ActionResultPartInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ActionResultPart[] | undefined) {
        if(value) {
            const valueArrValue: ActionResultPartImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ActionResultPartImpl? element:new ActionResultPartImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
