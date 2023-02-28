import {createKeyCredentialConfigurationFromDiscriminatorValue} from './createKeyCredentialConfigurationFromDiscriminatorValue';
import {createPasswordCredentialConfigurationFromDiscriminatorValue} from './createPasswordCredentialConfigurationFromDiscriminatorValue';
import {KeyCredentialConfiguration, PasswordCredentialConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppManagementConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The keyCredentials property */
    private _keyCredentials?: KeyCredentialConfiguration[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The passwordCredentials property */
    private _passwordCredentials?: PasswordCredentialConfiguration[] | undefined;
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
     * Instantiates a new appManagementConfiguration and sets the default values.
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
            "keyCredentials": n => { this.keyCredentials = n.getCollectionOfObjectValues<KeyCredentialConfiguration>(createKeyCredentialConfigurationFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "passwordCredentials": n => { this.passwordCredentials = n.getCollectionOfObjectValues<PasswordCredentialConfiguration>(createPasswordCredentialConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the keyCredentials property value. The keyCredentials property
     * @returns a keyCredentialConfiguration
     */
    public get keyCredentials() {
        return this._keyCredentials;
    };
    /**
     * Sets the keyCredentials property value. The keyCredentials property
     * @param value Value to set for the keyCredentials property.
     */
    public set keyCredentials(value: KeyCredentialConfiguration[] | undefined) {
        this._keyCredentials = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the passwordCredentials property value. The passwordCredentials property
     * @returns a passwordCredentialConfiguration
     */
    public get passwordCredentials() {
        return this._passwordCredentials;
    };
    /**
     * Sets the passwordCredentials property value. The passwordCredentials property
     * @param value Value to set for the passwordCredentials property.
     */
    public set passwordCredentials(value: PasswordCredentialConfiguration[] | undefined) {
        this._passwordCredentials = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<KeyCredentialConfiguration>("keyCredentials", this.keyCredentials);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<PasswordCredentialConfiguration>("passwordCredentials", this.passwordCredentials);
        writer.writeAdditionalData(this.additionalData);
    };
}
