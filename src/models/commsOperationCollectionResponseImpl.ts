import {CommsOperation} from './commsOperation';
import {CommsOperationCollectionResponse} from './commsOperationCollectionResponse';
import {createCommsOperationFromDiscriminatorValue} from './createCommsOperationFromDiscriminatorValue';
import {CommsOperationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CommsOperationCollectionResponseImpl implements AdditionalDataHolder, CommsOperationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: CommsOperation[] | undefined;
    /**
     * Instantiates a new CommsOperationCollectionResponse and sets the default values.
     * @param commsOperationCollectionResponseParameterValue 
     */
    public constructor(commsOperationCollectionResponseParameterValue?: CommsOperationCollectionResponse | undefined) {
        this.additionalData = commsOperationCollectionResponseParameterValue?.additionalData ? commsOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = commsOperationCollectionResponseParameterValue?.nextLink ;
        this.value = commsOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CommsOperationImpl>(createCommsOperationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: CommsOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CommsOperationImpl(element));});
        writer.writeCollectionOfObjectValues<CommsOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
