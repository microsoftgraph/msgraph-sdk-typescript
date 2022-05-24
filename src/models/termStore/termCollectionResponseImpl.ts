import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {TermImpl} from './index';
import {Term} from './term';
import {TermCollectionResponse} from './termCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermCollectionResponseImpl implements AdditionalDataHolder, Parsable, TermCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Term[] | undefined;
    /**
     * Instantiates a new TermCollectionResponse and sets the default values.
     * @param termCollectionResponseParameterValue 
     */
    public constructor(termCollectionResponseParameterValue?: TermCollectionResponse | undefined) {
        this.additionalData = termCollectionResponseParameterValue?.additionalData ? termCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = termCollectionResponseParameterValue?.nextLink ;
        this.value = termCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TermImpl>(createTermFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TermImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TermImpl(element));});
        writer.writeCollectionOfObjectValues<TermImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
