import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {RichLongRunningOperationImpl} from './index';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {RichLongRunningOperationCollectionResponse} from './richLongRunningOperationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RichLongRunningOperationCollectionResponseImpl implements AdditionalDataHolder, Parsable, RichLongRunningOperationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: RichLongRunningOperation[] | undefined;
    /**
     * Instantiates a new RichLongRunningOperationCollectionResponse and sets the default values.
     * @param richLongRunningOperationCollectionResponseParameterValue 
     */
    public constructor(richLongRunningOperationCollectionResponseParameterValue?: RichLongRunningOperationCollectionResponse | undefined) {
        this.additionalData = richLongRunningOperationCollectionResponseParameterValue?.additionalData ? richLongRunningOperationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = richLongRunningOperationCollectionResponseParameterValue?.nextLink ;
        this.value = richLongRunningOperationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RichLongRunningOperationImpl>(createRichLongRunningOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: RichLongRunningOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RichLongRunningOperationImpl(element));});
        writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
