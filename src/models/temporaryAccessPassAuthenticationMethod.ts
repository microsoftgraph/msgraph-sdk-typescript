import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time when the Temporary Access Pass was created. */
    private _createdDateTime?: Date | undefined;
    /** The state of the authentication method that indicates whether it's currently usable by the user. */
    private _isUsable?: boolean | undefined;
    /** Determines whether the pass is limited to a one-time use. If true, the pass can be used once; if false, the pass can be used multiple times within the Temporary Access Pass lifetime. */
    private _isUsableOnce?: boolean | undefined;
    /** The lifetime of the Temporary Access Pass in minutes starting at startDateTime. Must be between 10 and 43200 inclusive (equivalent to 30 days). */
    private _lifetimeInMinutes?: number | undefined;
    /** Details about the usability state (isUsable). Reasons can include: EnabledByPolicy, DisabledByPolicy, Expired, NotYetValid, OneTimeUsed. */
    private _methodUsabilityReason?: string | undefined;
    /** The date and time when the Temporary Access Pass becomes available to use and when isUsable is true is enforced. */
    private _startDateTime?: Date | undefined;
    /** The Temporary Access Pass used to authenticate. Returned only on creation of a new temporaryAccessPassAuthenticationMethod object; Hidden in subsequent read operations and returned as null with GET. */
    private _temporaryAccessPass?: string | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.temporaryAccessPassAuthenticationMethod";
    };
    /**
     * Gets the createdDateTime property value. The date and time when the Temporary Access Pass was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the Temporary Access Pass was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
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
     * Gets the isUsable property value. The state of the authentication method that indicates whether it's currently usable by the user.
     * @returns a boolean
     */
    public get isUsable() {
        return this._isUsable;
    };
    /**
     * Sets the isUsable property value. The state of the authentication method that indicates whether it's currently usable by the user.
     * @param value Value to set for the isUsable property.
     */
    public set isUsable(value: boolean | undefined) {
        this._isUsable = value;
    };
    /**
     * Gets the isUsableOnce property value. Determines whether the pass is limited to a one-time use. If true, the pass can be used once; if false, the pass can be used multiple times within the Temporary Access Pass lifetime.
     * @returns a boolean
     */
    public get isUsableOnce() {
        return this._isUsableOnce;
    };
    /**
     * Sets the isUsableOnce property value. Determines whether the pass is limited to a one-time use. If true, the pass can be used once; if false, the pass can be used multiple times within the Temporary Access Pass lifetime.
     * @param value Value to set for the isUsableOnce property.
     */
    public set isUsableOnce(value: boolean | undefined) {
        this._isUsableOnce = value;
    };
    /**
     * Gets the lifetimeInMinutes property value. The lifetime of the Temporary Access Pass in minutes starting at startDateTime. Must be between 10 and 43200 inclusive (equivalent to 30 days).
     * @returns a integer
     */
    public get lifetimeInMinutes() {
        return this._lifetimeInMinutes;
    };
    /**
     * Sets the lifetimeInMinutes property value. The lifetime of the Temporary Access Pass in minutes starting at startDateTime. Must be between 10 and 43200 inclusive (equivalent to 30 days).
     * @param value Value to set for the lifetimeInMinutes property.
     */
    public set lifetimeInMinutes(value: number | undefined) {
        this._lifetimeInMinutes = value;
    };
    /**
     * Gets the methodUsabilityReason property value. Details about the usability state (isUsable). Reasons can include: EnabledByPolicy, DisabledByPolicy, Expired, NotYetValid, OneTimeUsed.
     * @returns a string
     */
    public get methodUsabilityReason() {
        return this._methodUsabilityReason;
    };
    /**
     * Sets the methodUsabilityReason property value. Details about the usability state (isUsable). Reasons can include: EnabledByPolicy, DisabledByPolicy, Expired, NotYetValid, OneTimeUsed.
     * @param value Value to set for the methodUsabilityReason property.
     */
    public set methodUsabilityReason(value: string | undefined) {
        this._methodUsabilityReason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeBooleanValue("isUsable", this.isUsable);
        writer.writeBooleanValue("isUsableOnce", this.isUsableOnce);
        writer.writeNumberValue("lifetimeInMinutes", this.lifetimeInMinutes);
        writer.writeStringValue("methodUsabilityReason", this.methodUsabilityReason);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("temporaryAccessPass", this.temporaryAccessPass);
    };
    /**
     * Gets the startDateTime property value. The date and time when the Temporary Access Pass becomes available to use and when isUsable is true is enforced.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The date and time when the Temporary Access Pass becomes available to use and when isUsable is true is enforced.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the temporaryAccessPass property value. The Temporary Access Pass used to authenticate. Returned only on creation of a new temporaryAccessPassAuthenticationMethod object; Hidden in subsequent read operations and returned as null with GET.
     * @returns a string
     */
    public get temporaryAccessPass() {
        return this._temporaryAccessPass;
    };
    /**
     * Sets the temporaryAccessPass property value. The Temporary Access Pass used to authenticate. Returned only on creation of a new temporaryAccessPassAuthenticationMethod object; Hidden in subsequent read operations and returned as null with GET.
     * @param value Value to set for the temporaryAccessPass property.
     */
    public set temporaryAccessPass(value: string | undefined) {
        this._temporaryAccessPass = value;
    };
}
