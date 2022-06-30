import {Approval} from './approval';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {ApprovalImpl, RequestImpl} from './index';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserConsentRequestImpl extends RequestImpl implements UserConsentRequest {
    /** Approval decisions associated with a request. */
    private _approval?: Approval | undefined;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby. */
    private _reason?: string | undefined;
    /**
     * Gets the approval property value. Approval decisions associated with a request.
     * @returns a ApprovalInterface
     */
    public get approval() {
        return this._approval;
    };
    /**
     * Sets the approval property value. Approval decisions associated with a request.
     * @param value Value to set for the approval property.
     */
    public set approval(value: Approval | undefined) {
        if(value) {
            this._approval = value instanceof ApprovalImpl? value : new ApprovalImpl(value);
        }
    };
    /**
     * Instantiates a new UserConsentRequest and sets the default values.
     * @param userConsentRequestParameterValue 
     */
    public constructor(userConsentRequestParameterValue?: UserConsentRequest | undefined) {
        super(userConsentRequestParameterValue);
        this._approval = userConsentRequestParameterValue?.approval;
        this._reason = userConsentRequestParameterValue?.reason;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "approval": n => { this.approval = n.getObjectValue<ApprovalImpl>(createApprovalFromDiscriminatorValue); },
            "reason": n => { this.reason = n.getStringValue(); },
        };
    };
    /**
     * Gets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        if(value) {
            this._reason = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.approval){
            writer.writeObjectValue<ApprovalImpl>("approval", (!this.approval || this.approval instanceof ApprovalImpl? this.approval : new ApprovalImpl(this.approval)));
        }
        if(this.reason){
            writer.writeStringValue("reason", this.reason);
        }
    };
}
