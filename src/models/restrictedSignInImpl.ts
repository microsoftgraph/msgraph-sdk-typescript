import {SignInImpl} from './index';
import {RestrictedSignIn} from './restrictedSignIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class RestrictedSignInImpl extends SignInImpl implements Parsable, RestrictedSignIn {
    /** The targetTenantId property */
    public targetTenantId?: string | undefined;
    /**
     * Instantiates a new restrictedSignIn and sets the default values.
     * @param restrictedSignInParameterValue 
     */
    public constructor(restrictedSignInParameterValue?: RestrictedSignIn | undefined) {
        super();
        this.targetTenantId = restrictedSignInParameterValue?.targetTenantId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "targetTenantId": n => { this.targetTenantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.targetTenantId){
        writer.writeStringValue("targetTenantId", this.targetTenantId);
        }
    };
}
