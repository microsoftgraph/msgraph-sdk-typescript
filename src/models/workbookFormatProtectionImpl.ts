import {EntityImpl} from './index';
import {WorkbookFormatProtection} from './workbookFormatProtection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFormatProtectionImpl extends EntityImpl implements WorkbookFormatProtection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting. */
    public formulaHidden?: boolean | undefined;
    /** Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting. */
    public locked?: boolean | undefined;
    /**
     * Instantiates a new WorkbookFormatProtection and sets the default values.
     * @param workbookFormatProtectionParameterValue 
     */
    public constructor(workbookFormatProtectionParameterValue?: WorkbookFormatProtection | undefined) {
        super(workbookFormatProtectionParameterValue);
        this.additionalData = workbookFormatProtectionParameterValue?.additionalData ? workbookFormatProtectionParameterValue?.additionalData! : {};
        this.formulaHidden = workbookFormatProtectionParameterValue?.formulaHidden;
        this.locked = workbookFormatProtectionParameterValue?.locked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "formulaHidden": n => { this.formulaHidden = n.getBooleanValue(); },
            "locked": n => { this.locked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.formulaHidden){
            writer.writeBooleanValue("formulaHidden", this.formulaHidden);
        }
        if(this.locked){
            writer.writeBooleanValue("locked", this.locked);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
