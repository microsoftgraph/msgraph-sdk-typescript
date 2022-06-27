import {ExternalDomainFederation} from './externalDomainFederation';
import {IdentitySourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalDomainFederationImpl extends IdentitySourceImpl implements ExternalDomainFederation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the identity source, typically also the domain name. Read only. */
    public displayName?: string | undefined;
    /** The domain name. Read only. */
    public domainName?: string | undefined;
    /** The issuerURI of the incoming federation. Read only. */
    public issuerUri?: string | undefined;
    /**
     * Instantiates a new ExternalDomainFederation and sets the default values.
     * @param externalDomainFederationParameterValue 
     */
    public constructor(externalDomainFederationParameterValue?: ExternalDomainFederation | undefined) {
        super(externalDomainFederationParameterValue);
        this.additionalData = externalDomainFederationParameterValue?.additionalData ? externalDomainFederationParameterValue?.additionalData! : {};
        this.displayName = externalDomainFederationParameterValue?.displayName;
        this.domainName = externalDomainFederationParameterValue?.domainName;
        this.issuerUri = externalDomainFederationParameterValue?.issuerUri;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
            "issuerUri": n => { this.issuerUri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.domainName){
            writer.writeStringValue("domainName", this.domainName);
        }
        if(this.issuerUri){
            writer.writeStringValue("issuerUri", this.issuerUri);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
