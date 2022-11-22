import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {LongRunningOperation, PublicError} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RichLongRunningOperation extends LongRunningOperation implements Parsable {
    /** Error that caused the operation to fail. */
    private _error_escaped?: PublicError | undefined;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    private _percentageComplete?: number | undefined;
    /** The unique identifier for the result. */
    private _resourceId?: string | undefined;
    /** The type of the operation. */
    private _type?: string | undefined;
    /**
     * Instantiates a new RichLongRunningOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. Error that caused the operation to fail.
     * @returns a publicError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Error that caused the operation to fail.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
            "percentageComplete": n => { this.percentageComplete = n.getNumberValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the percentageComplete property value. A value between 0 and 100 that indicates the progress of the operation.
     * @returns a integer
     */
    public get percentageComplete() {
        return this._percentageComplete;
    };
    /**
     * Sets the percentageComplete property value. A value between 0 and 100 that indicates the progress of the operation.
     * @param value Value to set for the percentageComplete property.
     */
    public set percentageComplete(value: number | undefined) {
        this._percentageComplete = value;
    };
    /**
     * Gets the resourceId property value. The unique identifier for the result.
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The unique identifier for the result.
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PublicError>("error", this.error_escaped);
        writer.writeNumberValue("percentageComplete", this.percentageComplete);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the type property value. The type of the operation.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of the operation.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
