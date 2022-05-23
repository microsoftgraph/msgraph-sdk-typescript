import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {NamedLocationImpl} from './index';
import {NamedLocation} from './namedLocation';
import {NamedLocationCollectionResponse} from './namedLocationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NamedLocationCollectionResponseImpl implements AdditionalDataHolder, NamedLocationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: NamedLocation[] | undefined;
    /**
     * Instantiates a new NamedLocationCollectionResponse and sets the default values.
     * @param namedLocationCollectionResponseParameterValue 
     */
    public constructor(namedLocationCollectionResponseParameterValue?: NamedLocationCollectionResponse | undefined) {
        this.additionalData = namedLocationCollectionResponseParameterValue?.additionalData ? namedLocationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = namedLocationCollectionResponseParameterValue?.nextLink ;
        this.value = namedLocationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<NamedLocationImpl>(createNamedLocationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: NamedLocationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new NamedLocationImpl(element));});
        writer.writeCollectionOfObjectValues<NamedLocationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
