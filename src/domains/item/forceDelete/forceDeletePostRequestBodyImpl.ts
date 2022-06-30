import {ForceDeletePostRequestBody} from './forceDeletePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the forceDelete method. */
export class ForceDeletePostRequestBodyImpl implements ForceDeletePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The disableUserAccounts property */
    private _disableUserAccounts?: boolean | undefined;
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
     * Instantiates a new forceDeletePostRequestBody and sets the default values.
     * @param forceDeletePostRequestBodyParameterValue 
     */
    public constructor(forceDeletePostRequestBodyParameterValue?: ForceDeletePostRequestBody | undefined) {
        this._additionalData = forceDeletePostRequestBodyParameterValue?.additionalData ? forceDeletePostRequestBodyParameterValue?.additionalData! : {};
        this._disableUserAccounts = forceDeletePostRequestBodyParameterValue?.disableUserAccounts;
    };
    /**
     * Gets the disableUserAccounts property value. The disableUserAccounts property
     * @returns a boolean
     */
    public get disableUserAccounts() {
        return this._disableUserAccounts;
    };
    /**
     * Sets the disableUserAccounts property value. The disableUserAccounts property
     * @param value Value to set for the disableUserAccounts property.
     */
    public set disableUserAccounts(value: boolean | undefined) {
        if(value) {
            this._disableUserAccounts = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "disableUserAccounts": n => { this.disableUserAccounts = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.disableUserAccounts){
            writer.writeBooleanValue("disableUserAccounts", this.disableUserAccounts);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
