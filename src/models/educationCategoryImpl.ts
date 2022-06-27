import {EducationCategory} from './educationCategory';
import {EntityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCategoryImpl extends EntityImpl implements EducationCategory {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier for the category. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new EducationCategory and sets the default values.
     * @param educationCategoryParameterValue 
     */
    public constructor(educationCategoryParameterValue?: EducationCategory | undefined) {
        super(educationCategoryParameterValue);
        this.additionalData = educationCategoryParameterValue?.additionalData ? educationCategoryParameterValue?.additionalData! : {};
        this.displayName = educationCategoryParameterValue?.displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
