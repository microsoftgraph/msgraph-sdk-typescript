import {Contact} from './contact';
import {ContactCollectionResponse} from './contactCollectionResponse';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {ContactImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContactCollectionResponseImpl implements AdditionalDataHolder, ContactCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Contact[] | undefined;
    /**
     * Instantiates a new ContactCollectionResponse and sets the default values.
     * @param contactCollectionResponseParameterValue 
     */
    public constructor(contactCollectionResponseParameterValue?: ContactCollectionResponse | undefined) {
        this.additionalData = contactCollectionResponseParameterValue?.additionalData ? contactCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = contactCollectionResponseParameterValue?.nextLink ;
        this.value = contactCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ContactImpl>(createContactFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ContactImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ContactImpl(element));});
        writer.writeCollectionOfObjectValues<ContactImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
