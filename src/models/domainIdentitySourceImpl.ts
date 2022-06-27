import {DomainIdentitySource} from './domainIdentitySource';
import {IdentitySourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainIdentitySourceImpl extends IdentitySourceImpl implements DomainIdentitySource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the identity source, typically also the domain name. Read only. */
    public displayName?: string | undefined;
    /** The domain name. Read only. */
    public domainName?: string | undefined;
    /**
     * Instantiates a new DomainIdentitySource and sets the default values.
     * @param domainIdentitySourceParameterValue 
     */
    public constructor(domainIdentitySourceParameterValue?: DomainIdentitySource | undefined) {
        super(domainIdentitySourceParameterValue);
        this.additionalData = domainIdentitySourceParameterValue?.additionalData ? domainIdentitySourceParameterValue?.additionalData! : {};
        this.displayName = domainIdentitySourceParameterValue?.displayName;
        this.domainName = domainIdentitySourceParameterValue?.domainName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
