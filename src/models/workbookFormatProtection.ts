import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFormatProtection extends Entity implements Parsable {
    /** Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting. */
    private _formulaHidden?: boolean | undefined;
    /** Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting. */
    private _locked?: boolean | undefined;
    /**
     * Instantiates a new WorkbookFormatProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the formulaHidden property value. Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
     * @returns a boolean
     */
    public get formulaHidden() {
        return this._formulaHidden;
    };
    /**
     * Sets the formulaHidden property value. Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
     * @param value Value to set for the formulaHidden property.
     */
    public set formulaHidden(value: boolean | undefined) {
        this._formulaHidden = value;
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
     * Gets the locked property value. Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
     * @returns a boolean
     */
    public get locked() {
        return this._locked;
    };
    /**
     * Sets the locked property value. Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
     * @param value Value to set for the locked property.
     */
    public set locked(value: boolean | undefined) {
        this._locked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("formulaHidden", this.formulaHidden);
        writer.writeBooleanValue("locked", this.locked);
    };
}
