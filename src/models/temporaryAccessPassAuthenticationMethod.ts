import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time when the temporaryAccessPass was created. */
    private _createdDateTime?: Date | undefined;
    /** The state of the authentication method that indicates whether it's currently usable by the user. */
    private _isUsable?: boolean | undefined;
    /** Determines whether the pass is limited to a one time use. If true, the pass can be used once; if false, the pass can be used multiple times within the temporaryAccessPass lifetime. */
    private _isUsableOnce?: boolean | undefined;
    /** The lifetime of the temporaryAccessPass in minutes starting at startDateTime. Minimum 10, Maximum 43200 (equivalent to 30 days). */
    private _lifetimeInMinutes?: number | undefined;
    /** Details about usability state (isUsable). Reasons can include: enabledByPolicy, disabledByPolicy, expired, notYetValid, oneTimeUsed. */
    private _methodUsabilityReason?: string | undefined;
    /** The date and time when the temporaryAccessPass becomes available to use. */
    private _startDateTime?: Date | undefined;
    /** The temporaryAccessPass used to authenticate. Returned only on creation of a new temporaryAccessPass; returned as NULL with GET. */
    private _temporaryAccessPass?: string | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time when the temporaryAccessPass was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the temporaryAccessPass was created.
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
     * Gets the isUsableOnce property value. Determines whether the pass is limited to a one time use. If true, the pass can be used once; if false, the pass can be used multiple times within the temporaryAccessPass lifetime.
     * @returns a boolean
     */
    public get isUsableOnce() {
        return this._isUsableOnce;
    };
    /**
     * Sets the isUsableOnce property value. Determines whether the pass is limited to a one time use. If true, the pass can be used once; if false, the pass can be used multiple times within the temporaryAccessPass lifetime.
     * @param value Value to set for the isUsableOnce property.
     */
    public set isUsableOnce(value: boolean | undefined) {
        this._isUsableOnce = value;
    };
    /**
     * Gets the lifetimeInMinutes property value. The lifetime of the temporaryAccessPass in minutes starting at startDateTime. Minimum 10, Maximum 43200 (equivalent to 30 days).
     * @returns a integer
     */
    public get lifetimeInMinutes() {
        return this._lifetimeInMinutes;
    };
    /**
     * Sets the lifetimeInMinutes property value. The lifetime of the temporaryAccessPass in minutes starting at startDateTime. Minimum 10, Maximum 43200 (equivalent to 30 days).
     * @param value Value to set for the lifetimeInMinutes property.
     */
    public set lifetimeInMinutes(value: number | undefined) {
        this._lifetimeInMinutes = value;
    };
    /**
     * Gets the methodUsabilityReason property value. Details about usability state (isUsable). Reasons can include: enabledByPolicy, disabledByPolicy, expired, notYetValid, oneTimeUsed.
     * @returns a string
     */
    public get methodUsabilityReason() {
        return this._methodUsabilityReason;
    };
    /**
     * Sets the methodUsabilityReason property value. Details about usability state (isUsable). Reasons can include: enabledByPolicy, disabledByPolicy, expired, notYetValid, oneTimeUsed.
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
     * Gets the startDateTime property value. The date and time when the temporaryAccessPass becomes available to use.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The date and time when the temporaryAccessPass becomes available to use.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the temporaryAccessPass property value. The temporaryAccessPass used to authenticate. Returned only on creation of a new temporaryAccessPass; returned as NULL with GET.
     * @returns a string
     */
    public get temporaryAccessPass() {
        return this._temporaryAccessPass;
    };
    /**
     * Sets the temporaryAccessPass property value. The temporaryAccessPass used to authenticate. Returned only on creation of a new temporaryAccessPass; returned as NULL with GET.
     * @param value Value to set for the temporaryAccessPass property.
     */
    public set temporaryAccessPass(value: string | undefined) {
        this._temporaryAccessPass = value;
    };
}
