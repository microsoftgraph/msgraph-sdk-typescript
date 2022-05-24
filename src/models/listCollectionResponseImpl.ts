import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {ListImpl} from './index';
import {List} from './list';
import {ListCollectionResponse} from './listCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListCollectionResponseImpl implements AdditionalDataHolder, ListCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: List[] | undefined;
    /**
     * Instantiates a new ListCollectionResponse and sets the default values.
     * @param listCollectionResponseParameterValue 
     */
    public constructor(listCollectionResponseParameterValue?: ListCollectionResponse | undefined) {
        this.additionalData = listCollectionResponseParameterValue?.additionalData ? listCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = listCollectionResponseParameterValue?.nextLink ;
        this.value = listCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ListImpl>(createListFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ListImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ListImpl(element));});
        writer.writeCollectionOfObjectValues<ListImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
