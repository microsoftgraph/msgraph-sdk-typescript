import {SignInImpl} from './index';
import {RestrictedSignIn} from './restrictedSignIn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RestrictedSignInImpl extends SignInImpl implements RestrictedSignIn {
    /** The targetTenantId property */
    private _targetTenantId?: string | undefined;
    /**
     * Instantiates a new RestrictedSignIn and sets the default values.
     * @param restrictedSignInParameterValue 
     */
    public constructor(restrictedSignInParameterValue?: RestrictedSignIn | undefined) {
        super(restrictedSignInParameterValue);
        this._targetTenantId = restrictedSignInParameterValue?.targetTenantId;
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
    /**
     * Gets the targetTenantId property value. The targetTenantId property
     * @returns a string
     */
    public get targetTenantId() {
        return this._targetTenantId;
    };
    /**
     * Sets the targetTenantId property value. The targetTenantId property
     * @param value Value to set for the targetTenantId property.
     */
    public set targetTenantId(value: string | undefined) {
        if(value) {
            this._targetTenantId = value;
        }
    };
}
