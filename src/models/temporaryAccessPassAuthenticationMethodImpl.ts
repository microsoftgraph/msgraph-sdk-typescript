import {AuthenticationMethodImpl} from './index';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethodImpl extends AuthenticationMethodImpl implements TemporaryAccessPassAuthenticationMethod {
    /** The date and time when the Temporary Access Pass was created. */
    public createdDateTime?: Date | undefined;
    /** The state of the authentication method that indicates whether it's currently usable by the user. */
    public isUsable?: boolean | undefined;
    /** Determines whether the pass is limited to a one-time use. If true, the pass can be used once; if false, the pass can be used multiple times within the Temporary Access Pass lifetime. */
    public isUsableOnce?: boolean | undefined;
    /** The lifetime of the Temporary Access Pass in minutes starting at startDateTime. Must be between 10 and 43200 inclusive (equivalent to 30 days). */
    public lifetimeInMinutes?: number | undefined;
    /** Details about the usability state (isUsable). Reasons can include: EnabledByPolicy, DisabledByPolicy, Expired, NotYetValid, OneTimeUsed. */
    public methodUsabilityReason?: string | undefined;
    /** The date and time when the Temporary Access Pass becomes available to use and when isUsable is true is enforced. */
    public startDateTime?: Date | undefined;
    /** The Temporary Access Pass used to authenticate. Returned only on creation of a new temporaryAccessPassAuthenticationMethod object; Hidden in subsequent read operations and returned as null with GET. */
    public temporaryAccessPass?: string | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethod and sets the default values.
     * @param temporaryAccessPassAuthenticationMethodParameterValue 
     */
    public constructor(temporaryAccessPassAuthenticationMethodParameterValue?: TemporaryAccessPassAuthenticationMethod | undefined) {
        super(temporaryAccessPassAuthenticationMethodParameterValue);
        this.createdDateTime = temporaryAccessPassAuthenticationMethodParameterValue?.createdDateTime;
        this.isUsable = temporaryAccessPassAuthenticationMethodParameterValue?.isUsable;
        this.isUsableOnce = temporaryAccessPassAuthenticationMethodParameterValue?.isUsableOnce;
        this.lifetimeInMinutes = temporaryAccessPassAuthenticationMethodParameterValue?.lifetimeInMinutes;
        this.methodUsabilityReason = temporaryAccessPassAuthenticationMethodParameterValue?.methodUsabilityReason;
        this.startDateTime = temporaryAccessPassAuthenticationMethodParameterValue?.startDateTime;
        this.temporaryAccessPass = temporaryAccessPassAuthenticationMethodParameterValue?.temporaryAccessPass;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "isUsable": n => { this.isUsable = n.getBooleanValue(); },
            "isUsableOnce": n => { this.isUsableOnce = n.getBooleanValue(); },
            "lifetimeInMinutes": n => { this.lifetimeInMinutes = n.getNumberValue(); },
            "methodUsabilityReason": n => { this.methodUsabilityReason = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "temporaryAccessPass": n => { this.temporaryAccessPass = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.isUsable){
            writer.writeBooleanValue("isUsable", this.isUsable);
        }
        if(this.isUsableOnce){
            writer.writeBooleanValue("isUsableOnce", this.isUsableOnce);
        }
        if(this.lifetimeInMinutes){
            writer.writeNumberValue("lifetimeInMinutes", this.lifetimeInMinutes);
        }
        if(this.methodUsabilityReason){
            writer.writeStringValue("methodUsabilityReason", this.methodUsabilityReason);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.temporaryAccessPass){
            writer.writeStringValue("temporaryAccessPass", this.temporaryAccessPass);
        }
    };
}
