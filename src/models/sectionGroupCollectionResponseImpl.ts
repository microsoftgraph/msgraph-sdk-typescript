import {createSectionGroupFromDiscriminatorValue} from './createSectionGroupFromDiscriminatorValue';
import {SectionGroupImpl} from './index';
import {SectionGroup} from './sectionGroup';
import {SectionGroupCollectionResponse} from './sectionGroupCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SectionGroupCollectionResponseImpl implements AdditionalDataHolder, Parsable, SectionGroupCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SectionGroup[] | undefined;
    /**
     * Instantiates a new SectionGroupCollectionResponse and sets the default values.
     * @param sectionGroupCollectionResponseParameterValue 
     */
    public constructor(sectionGroupCollectionResponseParameterValue?: SectionGroupCollectionResponse | undefined) {
        this.additionalData = sectionGroupCollectionResponseParameterValue?.additionalData ? sectionGroupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = sectionGroupCollectionResponseParameterValue?.nextLink ;
        this.value = sectionGroupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SectionGroupImpl>(createSectionGroupFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SectionGroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SectionGroupImpl(element));});
        writer.writeCollectionOfObjectValues<SectionGroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
