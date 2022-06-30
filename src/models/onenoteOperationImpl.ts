import {createOnenoteOperationErrorFromDiscriminatorValue} from './createOnenoteOperationErrorFromDiscriminatorValue';
import {OnenoteOperationErrorImpl, OperationImpl} from './index';
import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationError} from './onenoteOperationError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteOperationImpl extends OperationImpl implements OnenoteOperation {
    /** The error returned by the operation. */
    private _error_escaped?: OnenoteOperationError | undefined;
    /** The operation percent complete if the operation is still in running status. */
    private _percentComplete?: string | undefined;
    /** The resource id. */
    private _resourceId?: string | undefined;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    private _resourceLocation?: string | undefined;
    /**
     * Instantiates a new OnenoteOperation and sets the default values.
     * @param onenoteOperationParameterValue 
     */
    public constructor(onenoteOperationParameterValue?: OnenoteOperation | undefined) {
        super(onenoteOperationParameterValue);
        this._error_escaped = onenoteOperationParameterValue?.error_escaped;
        this._percentComplete = onenoteOperationParameterValue?.percentComplete;
        this._resourceId = onenoteOperationParameterValue?.resourceId;
        this._resourceLocation = onenoteOperationParameterValue?.resourceLocation;
    };
    /**
     * Gets the error property value. The error returned by the operation.
     * @returns a OnenoteOperationErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error returned by the operation.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: OnenoteOperationError | undefined) {
        if(value) {
            this._error_escaped = value instanceof OnenoteOperationErrorImpl? value : new OnenoteOperationErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<OnenoteOperationErrorImpl>(createOnenoteOperationErrorFromDiscriminatorValue); },
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
        if(value) {
            this._percentComplete = value;
        }
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
        if(value) {
            this._resourceId = value;
        }
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
        if(value) {
            this._resourceLocation = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.error_escaped){
            writer.writeObjectValue<OnenoteOperationErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof OnenoteOperationErrorImpl? this.error_escaped : new OnenoteOperationErrorImpl(this.error_escaped)));
        }
        if(this.percentComplete){
            writer.writeStringValue("percentComplete", this.percentComplete);
        }
        if(this.resourceId){
            writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.resourceLocation){
            writer.writeStringValue("resourceLocation", this.resourceLocation);
        }
    };
}
