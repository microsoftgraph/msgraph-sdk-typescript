import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl, IdentityImpl} from './index';
import {ProvisionedIdentity} from './provisionedIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProvisionedIdentityImpl extends IdentityImpl implements Parsable, ProvisionedIdentity {
    /** Details of the identity. */
    public details?: DetailsInfo | undefined;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    public identityType?: string | undefined;
    /**
     * Instantiates a new provisionedIdentity and sets the default values.
     * @param provisionedIdentityParameterValue 
     */
    public constructor(provisionedIdentityParameterValue?: ProvisionedIdentity | undefined) {
        super();
        this.details = provisionedIdentityParameterValue?.details ;
        this.identityType = provisionedIdentityParameterValue?.identityType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfoImpl>(createDetailsInfoFromDiscriminatorValue); },
            "identityType": n => { this.identityType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.details){
        writer.writeObjectValue<DetailsInfoImpl>("details", new DetailsInfoImpl(this.details));
        }
        if(this.identityType){
        writer.writeStringValue("identityType", this.identityType);
        }
    };
}
