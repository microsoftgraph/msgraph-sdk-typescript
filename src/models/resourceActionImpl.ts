import {ResourceAction} from './resourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Set of allowed and not allowed actions for a resource. */
export class ResourceActionImpl implements ResourceAction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Allowed Actions */
    private _allowedResourceActions?: string[] | undefined;
    /** Not Allowed Actions. */
    private _notAllowedResourceActions?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowedResourceActions property value. Allowed Actions
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Sets the allowedResourceActions property value. Allowed Actions
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        if(value) {
            this._allowedResourceActions = value;
        }
    };
    /**
     * Instantiates a new resourceAction and sets the default values.
     * @param resourceActionParameterValue 
     */
    public constructor(resourceActionParameterValue?: ResourceAction | undefined) {
        this._additionalData = resourceActionParameterValue?.additionalData ? resourceActionParameterValue?.additionalData! : {};
        this._allowedResourceActions = resourceActionParameterValue?.allowedResourceActions;
        this._notAllowedResourceActions = resourceActionParameterValue?.notAllowedResourceActions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedResourceActions": n => { this.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
            "notAllowedResourceActions": n => { this.notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the notAllowedResourceActions property value. Not Allowed Actions.
     * @returns a string
     */
    public get notAllowedResourceActions() {
        return this._notAllowedResourceActions;
    };
    /**
     * Sets the notAllowedResourceActions property value. Not Allowed Actions.
     * @param value Value to set for the notAllowedResourceActions property.
     */
    public set notAllowedResourceActions(value: string[] | undefined) {
        if(value) {
            this._notAllowedResourceActions = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedResourceActions){
            writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        }
        if(this.notAllowedResourceActions){
            writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", this.notAllowedResourceActions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
