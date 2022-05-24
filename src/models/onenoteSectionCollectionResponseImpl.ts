import {createOnenoteSectionFromDiscriminatorValue} from './createOnenoteSectionFromDiscriminatorValue';
import {OnenoteSectionImpl} from './index';
import {OnenoteSection} from './onenoteSection';
import {OnenoteSectionCollectionResponse} from './onenoteSectionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteSectionCollectionResponseImpl implements AdditionalDataHolder, OnenoteSectionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OnenoteSection[] | undefined;
    /**
     * Instantiates a new OnenoteSectionCollectionResponse and sets the default values.
     * @param onenoteSectionCollectionResponseParameterValue 
     */
    public constructor(onenoteSectionCollectionResponseParameterValue?: OnenoteSectionCollectionResponse | undefined) {
        this.additionalData = onenoteSectionCollectionResponseParameterValue?.additionalData ? onenoteSectionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = onenoteSectionCollectionResponseParameterValue?.nextLink ;
        this.value = onenoteSectionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OnenoteSectionImpl>(createOnenoteSectionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OnenoteSectionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OnenoteSectionImpl(element));});
        writer.writeCollectionOfObjectValues<OnenoteSectionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
