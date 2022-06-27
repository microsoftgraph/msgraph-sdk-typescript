import {EntityImpl} from './index';
import {WorkbookRangeFill} from './workbookRangeFill';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class WorkbookRangeFillImpl extends EntityImpl implements WorkbookRangeFill {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange') */
    public color?: string | undefined;
    /**
     * Instantiates a new workbookRangeFill and sets the default values.
     * @param workbookRangeFillParameterValue 
     */
    public constructor(workbookRangeFillParameterValue?: WorkbookRangeFill | undefined) {
        super(workbookRangeFillParameterValue);
        this.additionalData = workbookRangeFillParameterValue?.additionalData ? workbookRangeFillParameterValue?.additionalData! : {};
        this.color = workbookRangeFillParameterValue?.color;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "color": n => { this.color = n.getStringValue(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
