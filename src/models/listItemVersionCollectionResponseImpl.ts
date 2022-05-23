import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {ListItemVersionImpl} from './index';
import {ListItemVersion} from './listItemVersion';
import {ListItemVersionCollectionResponse} from './listItemVersionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListItemVersionCollectionResponseImpl implements AdditionalDataHolder, ListItemVersionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ListItemVersion[] | undefined;
    /**
     * Instantiates a new ListItemVersionCollectionResponse and sets the default values.
     * @param listItemVersionCollectionResponseParameterValue 
     */
    public constructor(listItemVersionCollectionResponseParameterValue?: ListItemVersionCollectionResponse | undefined) {
        this.additionalData = listItemVersionCollectionResponseParameterValue?.additionalData ? listItemVersionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = listItemVersionCollectionResponseParameterValue?.nextLink ;
        this.value = listItemVersionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ListItemVersionImpl>(createListItemVersionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ListItemVersionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ListItemVersionImpl(element));});
        writer.writeCollectionOfObjectValues<ListItemVersionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
