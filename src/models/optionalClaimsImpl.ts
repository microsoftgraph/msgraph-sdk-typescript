import {createOptionalClaimFromDiscriminatorValue} from './createOptionalClaimFromDiscriminatorValue';
import {OptionalClaimImpl} from './index';
import {OptionalClaim} from './optionalClaim';
import {OptionalClaims} from './optionalClaims';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaimsImpl implements OptionalClaims {
    /** The optional claims returned in the JWT access token. */
    public accessToken?: OptionalClaim[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The optional claims returned in the JWT ID token. */
    public idToken?: OptionalClaim[] | undefined;
    /** The optional claims returned in the SAML token. */
    public saml2Token?: OptionalClaim[] | undefined;
    /**
     * Instantiates a new optionalClaims and sets the default values.
     * @param optionalClaimsParameterValue 
     */
    public constructor(optionalClaimsParameterValue?: OptionalClaims | undefined) {
        const accessTokenArrValue: OptionalClaimImpl[] = []; optionalClaimsParameterValue.accessToken?.forEach(element => {accessTokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
        this.accessToken = accessTokenArrValue;
        this.additionalData = optionalClaimsParameterValue?.additionalData ? optionalClaimsParameterValue?.additionalData! : {};
        const idTokenArrValue: OptionalClaimImpl[] = []; optionalClaimsParameterValue.idToken?.forEach(element => {idTokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
        this.idToken = idTokenArrValue;
        const saml2TokenArrValue: OptionalClaimImpl[] = []; optionalClaimsParameterValue.saml2Token?.forEach(element => {saml2TokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
        this.saml2Token = saml2TokenArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accessToken && this.accessToken.length != 0){        const accessTokenArrValue: OptionalClaimImpl[] = []; this.accessToken?.forEach(element => {accessTokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("accessToken", accessTokenArrValue);
        }
        if(this.idToken && this.idToken.length != 0){        const idTokenArrValue: OptionalClaimImpl[] = []; this.idToken?.forEach(element => {idTokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("idToken", idTokenArrValue);
        }
        if(this.saml2Token && this.saml2Token.length != 0){        const saml2TokenArrValue: OptionalClaimImpl[] = []; this.saml2Token?.forEach(element => {saml2TokenArrValue.push(element instanceof OptionalClaimImpl? element : new OptionalClaimImpl(element));});
            writer.writeCollectionOfObjectValues<OptionalClaimImpl>("saml2Token", saml2TokenArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
