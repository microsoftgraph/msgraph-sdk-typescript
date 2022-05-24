import {ContactFolder} from './contactFolder';
import {ContactFolderCollectionResponse} from './contactFolderCollectionResponse';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {ContactFolderImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContactFolderCollectionResponseImpl implements AdditionalDataHolder, ContactFolderCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ContactFolder[] | undefined;
    /**
     * Instantiates a new ContactFolderCollectionResponse and sets the default values.
     * @param contactFolderCollectionResponseParameterValue 
     */
    public constructor(contactFolderCollectionResponseParameterValue?: ContactFolderCollectionResponse | undefined) {
        this.additionalData = contactFolderCollectionResponseParameterValue?.additionalData ? contactFolderCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = contactFolderCollectionResponseParameterValue?.nextLink ;
        this.value = contactFolderCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ContactFolderImpl>(createContactFolderFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ContactFolderImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ContactFolderImpl(element));});
        writer.writeCollectionOfObjectValues<ContactFolderImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
