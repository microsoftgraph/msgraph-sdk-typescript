import {createOptionalClaimFromDiscriminatorValue} from './createOptionalClaimFromDiscriminatorValue';
import {OptionalClaim} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaims implements AdditionalDataHolder, Parsable {
    /** The optional claims returned in the JWT access token. */
    private _accessToken?: OptionalClaim[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The optional claims returned in the JWT ID token. */
    private _idToken?: OptionalClaim[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The optional claims returned in the SAML token. */
    private _saml2Token?: OptionalClaim[] | undefined;
    /**
     * Gets the accessToken property value. The optional claims returned in the JWT access token.
     * @returns a optionalClaim
     */
    public get accessToken() {
        return this._accessToken;
    };
    /**
     * Sets the accessToken property value. The optional claims returned in the JWT access token.
     * @param value Value to set for the accessToken property.
     */
    public set accessToken(value: OptionalClaim[] | undefined) {
        this._accessToken = value;
    };
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
     * Instantiates a new optionalClaims and sets the default values.
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
            "accessToken": n => { this.accessToken = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
            "idToken": n => { this.idToken = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "saml2Token": n => { this.saml2Token = n.getCollectionOfObjectValues<OptionalClaim>(createOptionalClaimFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the idToken property value. The optional claims returned in the JWT ID token.
     * @returns a optionalClaim
     */
    public get idToken() {
        return this._idToken;
    };
    /**
     * Sets the idToken property value. The optional claims returned in the JWT ID token.
     * @param value Value to set for the idToken property.
     */
    public set idToken(value: OptionalClaim[] | undefined) {
        this._idToken = value;
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
     * Gets the saml2Token property value. The optional claims returned in the SAML token.
     * @returns a optionalClaim
     */
    public get saml2Token() {
        return this._saml2Token;
    };
    /**
     * Sets the saml2Token property value. The optional claims returned in the SAML token.
     * @param value Value to set for the saml2Token property.
     */
    public set saml2Token(value: OptionalClaim[] | undefined) {
        this._saml2Token = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<OptionalClaim>("accessToken", this.accessToken);
        writer.writeCollectionOfObjectValues<OptionalClaim>("idToken", this.idToken);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<OptionalClaim>("saml2Token", this.saml2Token);
        writer.writeAdditionalData(this.additionalData);
    };
}
