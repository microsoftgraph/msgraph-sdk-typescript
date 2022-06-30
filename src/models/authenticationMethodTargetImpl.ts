import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of authenticationMethodConfiguration entities. */
export class AuthenticationMethodTargetImpl extends EntityImpl implements AuthenticationMethodTarget {
    /** Determines if the user is enforced to register the authentication method. */
    private _isRegistrationRequired?: boolean | undefined;
    /** Possible values are: user, group, and unknownFutureValue. */
    private _targetType?: AuthenticationMethodTargetType | undefined;
    /**
     * Instantiates a new authenticationMethodTarget and sets the default values.
     * @param authenticationMethodTargetParameterValue 
     */
    public constructor(authenticationMethodTargetParameterValue?: AuthenticationMethodTarget | undefined) {
        super(authenticationMethodTargetParameterValue);
        this._isRegistrationRequired = authenticationMethodTargetParameterValue?.isRegistrationRequired;
        this._targetType = authenticationMethodTargetParameterValue?.targetType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isRegistrationRequired": n => { this.isRegistrationRequired = n.getBooleanValue(); },
            "targetType": n => { this.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
        };
    };
    /**
     * Gets the isRegistrationRequired property value. Determines if the user is enforced to register the authentication method.
     * @returns a boolean
     */
    public get isRegistrationRequired() {
        return this._isRegistrationRequired;
    };
    /**
     * Sets the isRegistrationRequired property value. Determines if the user is enforced to register the authentication method.
     * @param value Value to set for the isRegistrationRequired property.
     */
    public set isRegistrationRequired(value: boolean | undefined) {
        if(value) {
            this._isRegistrationRequired = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isRegistrationRequired){
            writer.writeBooleanValue("isRegistrationRequired", this.isRegistrationRequired);
        }
        if(this.targetType){
            writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", this.targetType);
        }
    };
    /**
     * Gets the targetType property value. Possible values are: user, group, and unknownFutureValue.
     * @returns a authenticationMethodTargetType
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. Possible values are: user, group, and unknownFutureValue.
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: AuthenticationMethodTargetType | undefined) {
        if(value) {
            this._targetType = value;
        }
    };
}
