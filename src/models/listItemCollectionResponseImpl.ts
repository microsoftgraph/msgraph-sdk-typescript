import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {ListItemImpl} from './index';
import {ListItem} from './listItem';
import {ListItemCollectionResponse} from './listItemCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListItemCollectionResponseImpl implements AdditionalDataHolder, ListItemCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ListItem[] | undefined;
    /**
     * Instantiates a new ListItemCollectionResponse and sets the default values.
     * @param listItemCollectionResponseParameterValue 
     */
    public constructor(listItemCollectionResponseParameterValue?: ListItemCollectionResponse | undefined) {
        this.additionalData = listItemCollectionResponseParameterValue?.additionalData ? listItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = listItemCollectionResponseParameterValue?.nextLink ;
        this.value = listItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ListItemImpl>(createListItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ListItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ListItemImpl(element));});
        writer.writeCollectionOfObjectValues<ListItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
