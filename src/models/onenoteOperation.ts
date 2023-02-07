import {createOnenoteOperationErrorFromDiscriminatorValue} from './createOnenoteOperationErrorFromDiscriminatorValue';
import {OnenoteOperationError, Operation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteOperation extends Operation implements Parsable {
    /** The error returned by the operation. */
    private _errorEscaped?: OnenoteOperationError | undefined;
    /** The operation percent complete if the operation is still in running status. */
    private _percentComplete?: string | undefined;
    /** The resource id. */
    private _resourceId?: string | undefined;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    private _resourceLocation?: string | undefined;
    /**
     * Instantiates a new OnenoteOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. The error returned by the operation.
     * @returns a onenoteOperationError
     */
    public get errorEscaped() {
        return this._errorEscaped;
    };
    /**
     * Sets the error property value. The error returned by the operation.
     * @param value Value to set for the errorEscaped property.
     */
    public set errorEscaped(value: OnenoteOperationError | undefined) {
        this._errorEscaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.errorEscaped = n.getObjectValue<OnenoteOperationError>(createOnenoteOperationErrorFromDiscriminatorValue); },
            "percentComplete": n => { this.percentComplete = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "resourceLocation": n => { this.resourceLocation = n.getStringValue(); },
        };
    };
    /**
     * Gets the percentComplete property value. The operation percent complete if the operation is still in running status.
     * @returns a string
     */
    public get percentComplete() {
        return this._percentComplete;
    };
    /**
     * Sets the percentComplete property value. The operation percent complete if the operation is still in running status.
     * @param value Value to set for the percentComplete property.
     */
    public set percentComplete(value: string | undefined) {
        this._percentComplete = value;
    };
    /**
     * Gets the resourceId property value. The resource id.
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The resource id.
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Gets the resourceLocation property value. The resource URI for the object. For example, the resource URI for a copied page or section.
     * @returns a string
     */
    public get resourceLocation() {
        return this._resourceLocation;
    };
    /**
     * Sets the resourceLocation property value. The resource URI for the object. For example, the resource URI for a copied page or section.
     * @param value Value to set for the resourceLocation property.
     */
    public set resourceLocation(value: string | undefined) {
        this._resourceLocation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OnenoteOperationError>("error", this.errorEscaped);
        writer.writeStringValue("percentComplete", this.percentComplete);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeStringValue("resourceLocation", this.resourceLocation);
    };
}
