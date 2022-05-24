import {Approval} from './approval';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {ApprovalImpl, RequestImpl} from './index';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class UserConsentRequestImpl extends RequestImpl implements Parsable, UserConsentRequest {
    /** Approval decisions associated with a request. */
    public approval?: Approval | undefined;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby. */
    public reason?: string | undefined;
    /**
     * Instantiates a new userConsentRequest and sets the default values.
     * @param userConsentRequestParameterValue 
     */
    public constructor(userConsentRequestParameterValue?: UserConsentRequest | undefined) {
        super();
        this.approval = userConsentRequestParameterValue?.approval ;
        this.reason = userConsentRequestParameterValue?.reason ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.approval){
        writer.writeObjectValue<ApprovalImpl>("approval", new ApprovalImpl(this.approval));
        }
        if(this.reason){
        writer.writeStringValue("reason", this.reason);
        }
    };
}
