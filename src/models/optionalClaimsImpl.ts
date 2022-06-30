import {createOptionalClaimFromDiscriminatorValue} from './createOptionalClaimFromDiscriminatorValue';
import {OptionalClaimImpl} from './index';
import {OptionalClaim} from './optionalClaim';
import {OptionalClaims} from './optionalClaims';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaimsImpl implements OptionalClaims {
    /** The optional claims returned in the JWT access token. */
    private _accessToken?: OptionalClaim[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The optional claims returned in the JWT ID token. */
    private _idToken?: OptionalClaim[] | undefined;
    /** The optional claims returned in the SAML token. */
    private _saml2Token?: OptionalClaim[] | undefined;
    /**
     * Gets the accessToken property value. The optional claims returned in the JWT access token.
     * @returns a OptionalClaimInterface
     */
    public get accessToken() {
        return this._accessToken;
    };
    /**
     * Sets the accessToken property value. The optional claims returned in the JWT access token.
     * @param value Value to set for the accessToken property.
     */
    public set accessToken(value: OptionalClaim[] | undefined) {
        if(value) {
            const accessTokenArrValue: OptionalClaimImpl[] = [];
            this.accessToken?.forEach(element => {
                accessTokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
            });
            this._accessToken = accessTokenArrValue;
        }
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new optionalClaims and sets the default values.
     * @param optionalClaimsParameterValue 
     */
    public constructor(optionalClaimsParameterValue?: OptionalClaims | undefined) {
        this._accessToken = optionalClaimsParameterValue?.accessToken;
        this._additionalData = optionalClaimsParameterValue?.additionalData ? optionalClaimsParameterValue?.additionalData! : {};
        this._idToken = optionalClaimsParameterValue?.idToken;
        this._saml2Token = optionalClaimsParameterValue?.saml2Token;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessToken": n => { this.accessToken = n.getCollectionOfObjectValues<OptionalClaimImpl>(createOptionalClaimFromDiscriminatorValue); },
            "idToken": n => { this.idToken = n.getCollectionOfObjectValues<OptionalClaimImpl>(createOptionalClaimFromDiscriminatorValue); },
            "saml2Token": n => { this.saml2Token = n.getCollectionOfObjectValues<OptionalClaimImpl>(createOptionalClaimFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the idToken property value. The optional claims returned in the JWT ID token.
     * @returns a OptionalClaimInterface
     */
    public get idToken() {
        return this._idToken;
    };
    /**
     * Sets the idToken property value. The optional claims returned in the JWT ID token.
     * @param value Value to set for the idToken property.
     */
    public set idToken(value: OptionalClaim[] | undefined) {
        if(value) {
            const idTokenArrValue: OptionalClaimImpl[] = [];
            this.idToken?.forEach(element => {
                idTokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
            });
            this._idToken = idTokenArrValue;
        }
    };
    /**
     * Gets the saml2Token property value. The optional claims returned in the SAML token.
     * @returns a OptionalClaimInterface
     */
    public get saml2Token() {
        return this._saml2Token;
    };
    /**
     * Sets the saml2Token property value. The optional claims returned in the SAML token.
     * @param value Value to set for the saml2Token property.
     */
    public set saml2Token(value: OptionalClaim[] | undefined) {
        if(value) {
            const saml2TokenArrValue: OptionalClaimImpl[] = [];
            this.saml2Token?.forEach(element => {
                saml2TokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
            });
            this._saml2Token = saml2TokenArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accessToken && this.accessToken.length != 0){        const accessTokenArrValue: OptionalClaimImpl[] = [];
        this.accessToken?.forEach(element => {
            accessTokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("accessToken", accessTokenArrValue);
        }
        if(this.idToken && this.idToken.length != 0){        const idTokenArrValue: OptionalClaimImpl[] = [];
        this.idToken?.forEach(element => {
            idTokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("idToken", idTokenArrValue);
        }
        if(this.saml2Token && this.saml2Token.length != 0){        const saml2TokenArrValue: OptionalClaimImpl[] = [];
        this.saml2Token?.forEach(element => {
            saml2TokenArrValue.push((element instanceof OptionalClaimImpl? element:new OptionalClaimImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("saml2Token", saml2TokenArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
