import {EntityImpl} from './index';
import {WorkbookRangeBorder} from './workbookRangeBorder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class WorkbookRangeBorderImpl extends EntityImpl implements WorkbookRangeBorder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange'). */
    public color?: string | undefined;
    /** Constant value that indicates the specific side of the border. Possible values are: EdgeTop, EdgeBottom, EdgeLeft, EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only. */
    public sideIndex?: string | undefined;
    /** One of the constants of line style specifying the line style for the border. Possible values are: None, Continuous, Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot. */
    public style?: string | undefined;
    /** Specifies the weight of the border around a range. Possible values are: Hairline, Thin, Medium, Thick. */
    public weight?: string | undefined;
    /**
     * Instantiates a new workbookRangeBorder and sets the default values.
     * @param workbookRangeBorderParameterValue 
     */
    public constructor(workbookRangeBorderParameterValue?: WorkbookRangeBorder | undefined) {
        super(workbookRangeBorderParameterValue);
        this.additionalData = workbookRangeBorderParameterValue?.additionalData ? workbookRangeBorderParameterValue?.additionalData! : {};
        this.color = workbookRangeBorderParameterValue?.color;
        this.sideIndex = workbookRangeBorderParameterValue?.sideIndex;
        this.style = workbookRangeBorderParameterValue?.style;
        this.weight = workbookRangeBorderParameterValue?.weight;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "color": n => { this.color = n.getStringValue(); },
            "sideIndex": n => { this.sideIndex = n.getStringValue(); },
            "style": n => { this.style = n.getStringValue(); },
            "weight": n => { this.weight = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.color){
            writer.writeStringValue("color", this.color);
        }
        if(this.sideIndex){
            writer.writeStringValue("sideIndex", this.sideIndex);
        }
        if(this.style){
            writer.writeStringValue("style", this.style);
        }
        if(this.weight){
            writer.writeStringValue("weight", this.weight);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
