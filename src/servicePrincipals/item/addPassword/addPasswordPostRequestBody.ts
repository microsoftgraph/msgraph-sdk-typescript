import {PasswordCredential} from '../../../models/';
import {createPasswordCredentialFromDiscriminatorValue} from '../../../models/createPasswordCredentialFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addPassword method.
 */
export class AddPasswordPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The passwordCredential property */
    private _passwordCredential?: PasswordCredential | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new addPasswordPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "passwordCredential": n => { this.passwordCredential = n.getObjectValue<PasswordCredential>(createPasswordCredentialFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the passwordCredential property value. The passwordCredential property
     * @returns a passwordCredential
     */
    public get passwordCredential() {
        return this._passwordCredential;
    };
    /**
     * Sets the passwordCredential property value. The passwordCredential property
     * @param value Value to set for the passwordCredential property.
     */
    public set passwordCredential(value: PasswordCredential | undefined) {
        this._passwordCredential = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PasswordCredential>("passwordCredential", this.passwordCredential);
        writer.writeAdditionalData(this.additionalData);
    };
}
