import {Entity} from '../entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class PrintUsage extends Entity implements Parsable {
    private _completedBlackAndWhiteJobCount?: Int64 | undefined;
    private _completedColorJobCount?: Int64 | undefined;
    private _incompleteJobCount?: Int64 | undefined;
    private _usageDate?: string | undefined;
    /**
     * Instantiates a new printUsage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the completedBlackAndWhiteJobCount property value. 
     * @returns a int64
     */
    public get completedBlackAndWhiteJobCount() {
        return this._completedBlackAndWhiteJobCount;
    };
    /**
     * Gets the completedColorJobCount property value. 
     * @returns a int64
     */
    public get completedColorJobCount() {
        return this._completedColorJobCount;
    };
    /**
     * Gets the incompleteJobCount property value. 
     * @returns a int64
     */
    public get incompleteJobCount() {
        return this._incompleteJobCount;
    };
    /**
     * Gets the usageDate property value. 
     * @returns a string
     */
    public get usageDate() {
        return this._usageDate;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["completedBlackAndWhiteJobCount", (o, n) => { (o as unknown as PrintUsage).completedBlackAndWhiteJobCount = n.getObjectValue<Int64>(Int64); }],
            ["completedColorJobCount", (o, n) => { (o as unknown as PrintUsage).completedColorJobCount = n.getObjectValue<Int64>(Int64); }],
            ["incompleteJobCount", (o, n) => { (o as unknown as PrintUsage).incompleteJobCount = n.getObjectValue<Int64>(Int64); }],
            ["usageDate", (o, n) => { (o as unknown as PrintUsage).usageDate = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Int64>("completedBlackAndWhiteJobCount", this.completedBlackAndWhiteJobCount);
        writer.writeObjectValue<Int64>("completedColorJobCount", this.completedColorJobCount);
        writer.writeObjectValue<Int64>("incompleteJobCount", this.incompleteJobCount);
        writer.writeStringValue("usageDate", this.usageDate);
    };
    /**
     * Sets the completedBlackAndWhiteJobCount property value. 
     * @param value Value to set for the completedBlackAndWhiteJobCount property.
     */
    public set completedBlackAndWhiteJobCount(value: Int64 | undefined) {
        this._completedBlackAndWhiteJobCount = value;
    };
    /**
     * Sets the completedColorJobCount property value. 
     * @param value Value to set for the completedColorJobCount property.
     */
    public set completedColorJobCount(value: Int64 | undefined) {
        this._completedColorJobCount = value;
    };
    /**
     * Sets the incompleteJobCount property value. 
     * @param value Value to set for the incompleteJobCount property.
     */
    public set incompleteJobCount(value: Int64 | undefined) {
        this._incompleteJobCount = value;
    };
    /**
     * Sets the usageDate property value. 
     * @param value Value to set for the usageDate property.
     */
    public set usageDate(value: string | undefined) {
        this._usageDate = value;
    };
}
