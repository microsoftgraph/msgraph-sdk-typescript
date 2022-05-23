import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookIconImpl implements AdditionalDataHolder, Parsable, WorkbookIcon {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the index of the icon in the given set. */
    public index?: number | undefined;
    /** Represents the set that the icon is part of. Possible values are: Invalid, ThreeArrows, ThreeArrowsGray, ThreeFlags, ThreeTrafficLights1, ThreeTrafficLights2, ThreeSigns, ThreeSymbols, ThreeSymbols2, FourArrows, FourArrowsGray, FourRedToBlack, FourRating, FourTrafficLights, FiveArrows, FiveArrowsGray, FiveRating, FiveQuarters, ThreeStars, ThreeTriangles, FiveBoxes. */
    public set?: string | undefined;
    /**
     * Instantiates a new workbookIcon and sets the default values.
     * @param workbookIconParameterValue 
     */
    public constructor(workbookIconParameterValue?: WorkbookIcon | undefined) {
        this.additionalData = workbookIconParameterValue?.additionalData ? workbookIconParameterValue?.additionalData! : {}
        this.index = workbookIconParameterValue?.index ;
        this.set = workbookIconParameterValue?.set ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "index": n => { this.index = n.getNumberValue(); },
            "set": n => { this.set = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.index){
        writer.writeNumberValue("index", this.index);
        }
        if(this.set){
        writer.writeStringValue("set", this.set);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
