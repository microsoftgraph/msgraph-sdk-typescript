import {ActionResultPartImpl} from '../../../../../../models/';
import {ActionResultPart} from '../../../../../../models/actionResultPart';
import {createActionResultPartFromDiscriminatorValue} from '../../../../../../models/createActionResultPartFromDiscriminatorValue';
import {AddResponse} from './addResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method. */
export class AddResponseImpl implements AdditionalDataHolder, AddResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ActionResultPart[] | undefined;
    /**
     * Instantiates a new addResponse and sets the default values.
     * @param addResponseParameterValue 
     */
    public constructor(addResponseParameterValue?: AddResponse | undefined) {
        this.additionalData = addResponseParameterValue?.additionalData ? addResponseParameterValue?.additionalData! : {}
        this.value = addResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ActionResultPartImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ActionResultPartImpl(element));});
        writer.writeCollectionOfObjectValues<ActionResultPartImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
