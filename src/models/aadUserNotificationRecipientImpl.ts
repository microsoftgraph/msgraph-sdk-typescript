import {AadUserNotificationRecipient} from './aadUserNotificationRecipient';
import {TeamworkNotificationRecipientImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AadUserNotificationRecipientImpl extends TeamworkNotificationRecipientImpl implements AadUserNotificationRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Azure AD user identifier. Use the List users method to get this ID. */
    public userId?: string | undefined;
    /**
     * Instantiates a new AadUserNotificationRecipient and sets the default values.
     * @param aadUserNotificationRecipientParameterValue 
     */
    public constructor(aadUserNotificationRecipientParameterValue?: AadUserNotificationRecipient | undefined) {
        super(aadUserNotificationRecipientParameterValue);
        this.additionalData = aadUserNotificationRecipientParameterValue?.additionalData ? aadUserNotificationRecipientParameterValue?.additionalData! : {};
        this.userId = aadUserNotificationRecipientParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
