import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {IdentityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentitySetImpl implements IdentitySet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Optional. The application associated with this action. */
    private _application?: Identity | undefined;
    /** Optional. The device associated with this action. */
    private _device?: Identity | undefined;
    /** Optional. The user associated with this action. */
    private _user?: Identity | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the application property value. Optional. The application associated with this action.
     * @returns a IdentityInterface
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. Optional. The application associated with this action.
     * @param value Value to set for the application property.
     */
    public set application(value: Identity | undefined) {
        if(value) {
            this._application = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * Instantiates a new identitySet and sets the default values.
     * @param identitySetParameterValue 
     */
    public constructor(identitySetParameterValue?: IdentitySet | undefined) {
        this._additionalData = identitySetParameterValue?.additionalData ? identitySetParameterValue?.additionalData! : {};
        this._application = identitySetParameterValue?.application;
        this._device = identitySetParameterValue?.device;
        this._user = identitySetParameterValue?.user;
    };
    /**
     * Gets the device property value. Optional. The device associated with this action.
     * @returns a IdentityInterface
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. Optional. The device associated with this action.
     * @param value Value to set for the device property.
     */
    public set device(value: Identity | undefined) {
        if(value) {
            this._device = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "device": n => { this.device = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "user": n => { this.user = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.application){
            writer.writeObjectValue<IdentityImpl>("application", (!this.application || this.application instanceof IdentityImpl? this.application : new IdentityImpl(this.application)));
        }
        if(this.device){
            writer.writeObjectValue<IdentityImpl>("device", (!this.device || this.device instanceof IdentityImpl? this.device : new IdentityImpl(this.device)));
        }
        if(this.user){
            writer.writeObjectValue<IdentityImpl>("user", (!this.user || this.user instanceof IdentityImpl? this.user : new IdentityImpl(this.user)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. Optional. The user associated with this action.
     * @returns a IdentityInterface
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. Optional. The user associated with this action.
     * @param value Value to set for the user property.
     */
    public set user(value: Identity | undefined) {
        if(value) {
            this._user = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
}
