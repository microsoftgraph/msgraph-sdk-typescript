import {RemoveGroupPostRequestBody} from './removeGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeGroup method. */
export class RemoveGroupPostRequestBodyImpl implements RemoveGroupPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The groupId property */
    private _groupId?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new removeGroupPostRequestBody and sets the default values.
     * @param removeGroupPostRequestBodyParameterValue 
     */
    public constructor(removeGroupPostRequestBodyParameterValue?: RemoveGroupPostRequestBody | undefined) {
        this._additionalData = removeGroupPostRequestBodyParameterValue?.additionalData ? removeGroupPostRequestBodyParameterValue?.additionalData! : {};
        this._groupId = removeGroupPostRequestBodyParameterValue?.groupId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupId": n => { this.groupId = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupId property value. The groupId property
     * @returns a string
     */
    public get groupId() {
        return this._groupId;
    };
    /**
     * Sets the groupId property value. The groupId property
     * @param value Value to set for the groupId property.
     */
    public set groupId(value: string | undefined) {
        if(value) {
            this._groupId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupId){
            writer.writeStringValue("groupId", this.groupId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
