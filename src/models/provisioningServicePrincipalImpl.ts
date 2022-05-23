import {IdentityImpl} from './index';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProvisioningServicePrincipalImpl extends IdentityImpl implements Parsable, ProvisioningServicePrincipal {
    /**
     * Instantiates a new provisioningServicePrincipal and sets the default values.
     * @param provisioningServicePrincipalParameterValue 
     */
    public constructor(provisioningServicePrincipalParameterValue?: ProvisioningServicePrincipal | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
