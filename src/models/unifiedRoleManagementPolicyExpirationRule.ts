import {UnifiedRoleManagementPolicyRule} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyExpirationRule extends UnifiedRoleManagementPolicyRule implements Parsable {
    /** Indicates whether expiration is required or if it's a permanently active assignment or eligibility. */
    private _isExpirationRequired?: boolean | undefined;
    /** The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true. */
    private _maximumDuration?: Duration | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyExpirationRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isExpirationRequired": n => { this.isExpirationRequired = n.getBooleanValue(); },
            "maximumDuration": n => { this.maximumDuration = n.getDurationValue(); },
        };
    };
    /**
     * Gets the isExpirationRequired property value. Indicates whether expiration is required or if it's a permanently active assignment or eligibility.
     * @returns a boolean
     */
    public get isExpirationRequired() {
        return this._isExpirationRequired;
    };
    /**
     * Sets the isExpirationRequired property value. Indicates whether expiration is required or if it's a permanently active assignment or eligibility.
     * @param value Value to set for the isExpirationRequired property.
     */
    public set isExpirationRequired(value: boolean | undefined) {
        this._isExpirationRequired = value;
    };
    /**
     * Gets the maximumDuration property value. The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true.
     * @returns a Duration
     */
    public get maximumDuration() {
        return this._maximumDuration;
    };
    /**
     * Sets the maximumDuration property value. The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true.
     * @param value Value to set for the maximumDuration property.
     */
    public set maximumDuration(value: Duration | undefined) {
        this._maximumDuration = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isExpirationRequired", this.isExpirationRequired);
        writer.writeDurationValue("maximumDuration", this.maximumDuration);
    };
}
