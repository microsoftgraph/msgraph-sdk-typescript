import {Entity} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCatalogs singleton.
 */
export class PrintUsage extends Entity implements Parsable {
    /** The completedBlackAndWhiteJobCount property */
    private _completedBlackAndWhiteJobCount?: number | undefined;
    /** The completedColorJobCount property */
    private _completedColorJobCount?: number | undefined;
    /** The incompleteJobCount property */
    private _incompleteJobCount?: number | undefined;
    /** The usageDate property */
    private _usageDate?: DateOnly | undefined;
    /**
     * Gets the completedBlackAndWhiteJobCount property value. The completedBlackAndWhiteJobCount property
     * @returns a int64
     */
    public get completedBlackAndWhiteJobCount() {
        return this._completedBlackAndWhiteJobCount;
    };
    /**
     * Sets the completedBlackAndWhiteJobCount property value. The completedBlackAndWhiteJobCount property
     * @param value Value to set for the completedBlackAndWhiteJobCount property.
     */
    public set completedBlackAndWhiteJobCount(value: number | undefined) {
        this._completedBlackAndWhiteJobCount = value;
    };
    /**
     * Gets the completedColorJobCount property value. The completedColorJobCount property
     * @returns a int64
     */
    public get completedColorJobCount() {
        return this._completedColorJobCount;
    };
    /**
     * Sets the completedColorJobCount property value. The completedColorJobCount property
     * @param value Value to set for the completedColorJobCount property.
     */
    public set completedColorJobCount(value: number | undefined) {
        this._completedColorJobCount = value;
    };
    /**
     * Instantiates a new printUsage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "completedBlackAndWhiteJobCount": n => { this.completedBlackAndWhiteJobCount = n.getNumberValue(); },
            "completedColorJobCount": n => { this.completedColorJobCount = n.getNumberValue(); },
            "incompleteJobCount": n => { this.incompleteJobCount = n.getNumberValue(); },
            "usageDate": n => { this.usageDate = n.getDateOnlyValue(); },
        };
    };
    /**
     * Gets the incompleteJobCount property value. The incompleteJobCount property
     * @returns a int64
     */
    public get incompleteJobCount() {
        return this._incompleteJobCount;
    };
    /**
     * Sets the incompleteJobCount property value. The incompleteJobCount property
     * @param value Value to set for the incompleteJobCount property.
     */
    public set incompleteJobCount(value: number | undefined) {
        this._incompleteJobCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("completedBlackAndWhiteJobCount", this.completedBlackAndWhiteJobCount);
        writer.writeNumberValue("completedColorJobCount", this.completedColorJobCount);
        writer.writeNumberValue("incompleteJobCount", this.incompleteJobCount);
        writer.writeDateOnlyValue("usageDate", this.usageDate);
    };
    /**
     * Gets the usageDate property value. The usageDate property
     * @returns a DateOnly
     */
    public get usageDate() {
        return this._usageDate;
    };
    /**
     * Sets the usageDate property value. The usageDate property
     * @param value Value to set for the usageDate property.
     */
    public set usageDate(value: DateOnly | undefined) {
        this._usageDate = value;
    };
}
