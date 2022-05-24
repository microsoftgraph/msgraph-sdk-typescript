import {createPersonFromDiscriminatorValue} from './createPersonFromDiscriminatorValue';
import {PersonImpl} from './index';
import {Person} from './person';
import {PersonCollectionResponse} from './personCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonCollectionResponseImpl implements AdditionalDataHolder, Parsable, PersonCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Person[] | undefined;
    /**
     * Instantiates a new PersonCollectionResponse and sets the default values.
     * @param personCollectionResponseParameterValue 
     */
    public constructor(personCollectionResponseParameterValue?: PersonCollectionResponse | undefined) {
        this.additionalData = personCollectionResponseParameterValue?.additionalData ? personCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = personCollectionResponseParameterValue?.nextLink ;
        this.value = personCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PersonImpl>(createPersonFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PersonImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PersonImpl(element));});
        writer.writeCollectionOfObjectValues<PersonImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
