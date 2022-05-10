import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {EducationClass} from './educationClass';
import {EducationClassCollectionResponse} from './educationClassCollectionResponse';
import {EducationClassImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationClassCollectionResponseImpl implements AdditionalDataHolder, EducationClassCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: EducationClass[] | undefined;
    /**
     * Instantiates a new EducationClassCollectionResponse and sets the default values.
     * @param educationClassCollectionResponseParameterValue 
     */
    public constructor(educationClassCollectionResponseParameterValue?: EducationClassCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = educationClassCollectionResponseParameterValue?.additionalData ? {} : educationClassCollectionResponseParameterValue?.additionalData!
        this.nextLink = educationClassCollectionResponseParameterValue?.nextLink ;
        this.value = educationClassCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationClassImpl>(createEducationClassFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: EducationClassImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationClassImpl(element));});
        writer.writeCollectionOfObjectValues<EducationClassImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
