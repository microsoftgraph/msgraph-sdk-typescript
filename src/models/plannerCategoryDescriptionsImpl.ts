import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerCategoryDescriptionsImpl implements AdditionalDataHolder, Parsable, PlannerCategoryDescriptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The label associated with Category 1 */
    public category1?: string | undefined;
    /** The label associated with Category 10 */
    public category10?: string | undefined;
    /** The label associated with Category 11 */
    public category11?: string | undefined;
    /** The label associated with Category 12 */
    public category12?: string | undefined;
    /** The label associated with Category 13 */
    public category13?: string | undefined;
    /** The label associated with Category 14 */
    public category14?: string | undefined;
    /** The label associated with Category 15 */
    public category15?: string | undefined;
    /** The label associated with Category 16 */
    public category16?: string | undefined;
    /** The label associated with Category 17 */
    public category17?: string | undefined;
    /** The label associated with Category 18 */
    public category18?: string | undefined;
    /** The label associated with Category 19 */
    public category19?: string | undefined;
    /** The label associated with Category 2 */
    public category2?: string | undefined;
    /** The label associated with Category 20 */
    public category20?: string | undefined;
    /** The label associated with Category 21 */
    public category21?: string | undefined;
    /** The label associated with Category 22 */
    public category22?: string | undefined;
    /** The label associated with Category 23 */
    public category23?: string | undefined;
    /** The label associated with Category 24 */
    public category24?: string | undefined;
    /** The label associated with Category 25 */
    public category25?: string | undefined;
    /** The label associated with Category 3 */
    public category3?: string | undefined;
    /** The label associated with Category 4 */
    public category4?: string | undefined;
    /** The label associated with Category 5 */
    public category5?: string | undefined;
    /** The label associated with Category 6 */
    public category6?: string | undefined;
    /** The label associated with Category 7 */
    public category7?: string | undefined;
    /** The label associated with Category 8 */
    public category8?: string | undefined;
    /** The label associated with Category 9 */
    public category9?: string | undefined;
    /**
     * Instantiates a new plannerCategoryDescriptions and sets the default values.
     * @param plannerCategoryDescriptionsParameterValue 
     */
    public constructor(plannerCategoryDescriptionsParameterValue?: PlannerCategoryDescriptions | undefined) {
        this.additionalData = plannerCategoryDescriptionsParameterValue?.additionalData ? plannerCategoryDescriptionsParameterValue?.additionalData! : {}
        this.category1 = plannerCategoryDescriptionsParameterValue?.category1 ;
        this.category10 = plannerCategoryDescriptionsParameterValue?.category10 ;
        this.category11 = plannerCategoryDescriptionsParameterValue?.category11 ;
        this.category12 = plannerCategoryDescriptionsParameterValue?.category12 ;
        this.category13 = plannerCategoryDescriptionsParameterValue?.category13 ;
        this.category14 = plannerCategoryDescriptionsParameterValue?.category14 ;
        this.category15 = plannerCategoryDescriptionsParameterValue?.category15 ;
        this.category16 = plannerCategoryDescriptionsParameterValue?.category16 ;
        this.category17 = plannerCategoryDescriptionsParameterValue?.category17 ;
        this.category18 = plannerCategoryDescriptionsParameterValue?.category18 ;
        this.category19 = plannerCategoryDescriptionsParameterValue?.category19 ;
        this.category2 = plannerCategoryDescriptionsParameterValue?.category2 ;
        this.category20 = plannerCategoryDescriptionsParameterValue?.category20 ;
        this.category21 = plannerCategoryDescriptionsParameterValue?.category21 ;
        this.category22 = plannerCategoryDescriptionsParameterValue?.category22 ;
        this.category23 = plannerCategoryDescriptionsParameterValue?.category23 ;
        this.category24 = plannerCategoryDescriptionsParameterValue?.category24 ;
        this.category25 = plannerCategoryDescriptionsParameterValue?.category25 ;
        this.category3 = plannerCategoryDescriptionsParameterValue?.category3 ;
        this.category4 = plannerCategoryDescriptionsParameterValue?.category4 ;
        this.category5 = plannerCategoryDescriptionsParameterValue?.category5 ;
        this.category6 = plannerCategoryDescriptionsParameterValue?.category6 ;
        this.category7 = plannerCategoryDescriptionsParameterValue?.category7 ;
        this.category8 = plannerCategoryDescriptionsParameterValue?.category8 ;
        this.category9 = plannerCategoryDescriptionsParameterValue?.category9 ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "category1": n => { this.category1 = n.getStringValue(); },
            "category10": n => { this.category10 = n.getStringValue(); },
            "category11": n => { this.category11 = n.getStringValue(); },
            "category12": n => { this.category12 = n.getStringValue(); },
            "category13": n => { this.category13 = n.getStringValue(); },
            "category14": n => { this.category14 = n.getStringValue(); },
            "category15": n => { this.category15 = n.getStringValue(); },
            "category16": n => { this.category16 = n.getStringValue(); },
            "category17": n => { this.category17 = n.getStringValue(); },
            "category18": n => { this.category18 = n.getStringValue(); },
            "category19": n => { this.category19 = n.getStringValue(); },
            "category2": n => { this.category2 = n.getStringValue(); },
            "category20": n => { this.category20 = n.getStringValue(); },
            "category21": n => { this.category21 = n.getStringValue(); },
            "category22": n => { this.category22 = n.getStringValue(); },
            "category23": n => { this.category23 = n.getStringValue(); },
            "category24": n => { this.category24 = n.getStringValue(); },
            "category25": n => { this.category25 = n.getStringValue(); },
            "category3": n => { this.category3 = n.getStringValue(); },
            "category4": n => { this.category4 = n.getStringValue(); },
            "category5": n => { this.category5 = n.getStringValue(); },
            "category6": n => { this.category6 = n.getStringValue(); },
            "category7": n => { this.category7 = n.getStringValue(); },
            "category8": n => { this.category8 = n.getStringValue(); },
            "category9": n => { this.category9 = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.category1){
        writer.writeStringValue("category1", this.category1);
        }
        if(this.category10){
        writer.writeStringValue("category10", this.category10);
        }
        if(this.category11){
        writer.writeStringValue("category11", this.category11);
        }
        if(this.category12){
        writer.writeStringValue("category12", this.category12);
        }
        if(this.category13){
        writer.writeStringValue("category13", this.category13);
        }
        if(this.category14){
        writer.writeStringValue("category14", this.category14);
        }
        if(this.category15){
        writer.writeStringValue("category15", this.category15);
        }
        if(this.category16){
        writer.writeStringValue("category16", this.category16);
        }
        if(this.category17){
        writer.writeStringValue("category17", this.category17);
        }
        if(this.category18){
        writer.writeStringValue("category18", this.category18);
        }
        if(this.category19){
        writer.writeStringValue("category19", this.category19);
        }
        if(this.category2){
        writer.writeStringValue("category2", this.category2);
        }
        if(this.category20){
        writer.writeStringValue("category20", this.category20);
        }
        if(this.category21){
        writer.writeStringValue("category21", this.category21);
        }
        if(this.category22){
        writer.writeStringValue("category22", this.category22);
        }
        if(this.category23){
        writer.writeStringValue("category23", this.category23);
        }
        if(this.category24){
        writer.writeStringValue("category24", this.category24);
        }
        if(this.category25){
        writer.writeStringValue("category25", this.category25);
        }
        if(this.category3){
        writer.writeStringValue("category3", this.category3);
        }
        if(this.category4){
        writer.writeStringValue("category4", this.category4);
        }
        if(this.category5){
        writer.writeStringValue("category5", this.category5);
        }
        if(this.category6){
        writer.writeStringValue("category6", this.category6);
        }
        if(this.category7){
        writer.writeStringValue("category7", this.category7);
        }
        if(this.category8){
        writer.writeStringValue("category8", this.category8);
        }
        if(this.category9){
        writer.writeStringValue("category9", this.category9);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
