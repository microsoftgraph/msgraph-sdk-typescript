import {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMemberGroups method. */
export class GetMemberGroupsPostRequestBodyImpl implements GetMemberGroupsPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The securityEnabledOnly property */
    private _securityEnabledOnly?: boolean | undefined;
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
     * Instantiates a new getMemberGroupsPostRequestBody and sets the default values.
     * @param getMemberGroupsPostRequestBodyParameterValue 
     */
    public constructor(getMemberGroupsPostRequestBodyParameterValue?: GetMemberGroupsPostRequestBody | undefined) {
        this._additionalData = getMemberGroupsPostRequestBodyParameterValue?.additionalData ? getMemberGroupsPostRequestBodyParameterValue?.additionalData! : {};
        this._securityEnabledOnly = getMemberGroupsPostRequestBodyParameterValue?.securityEnabledOnly;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "securityEnabledOnly": n => { this.securityEnabledOnly = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the securityEnabledOnly property value. The securityEnabledOnly property
     * @returns a boolean
     */
    public get securityEnabledOnly() {
        return this._securityEnabledOnly;
    };
    /**
     * Sets the securityEnabledOnly property value. The securityEnabledOnly property
     * @param value Value to set for the securityEnabledOnly property.
     */
    public set securityEnabledOnly(value: boolean | undefined) {
        if(value) {
            this._securityEnabledOnly = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.securityEnabledOnly){
            writer.writeBooleanValue("securityEnabledOnly", this.securityEnabledOnly);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
