import {MessageSecurityState} from './messageSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageSecurityStateImpl implements AdditionalDataHolder, MessageSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The connectingIP property  */
    connectingIP?: string | undefined;
    /** The deliveryAction property  */
    deliveryAction?: string | undefined;
    /** The deliveryLocation property  */
    deliveryLocation?: string | undefined;
    /** The directionality property  */
    directionality?: string | undefined;
    /** The internetMessageId property  */
    internetMessageId?: string | undefined;
    /** The messageFingerprint property  */
    messageFingerprint?: string | undefined;
    /** The messageReceivedDateTime property  */
    messageReceivedDateTime?: Date | undefined;
    /** The messageSubject property  */
    messageSubject?: string | undefined;
    /** The networkMessageId property  */
    networkMessageId?: string | undefined;
    /**
     * Instantiates a new messageSecurityState and sets the default values.
     * @param messageSecurityStateParameterValue 
     */
    public constructor(messageSecurityStateParameterValue?: MessageSecurityState | undefined) {
        this.additionalData = {};
        this.additionalData = messageSecurityStateParameterValue?.additionalData ? {} : messageSecurityStateParameterValue?.additionalData!
        this.connectingIP = messageSecurityStateParameterValue?.connectingIP ;
        this.deliveryAction = messageSecurityStateParameterValue?.deliveryAction ;
        this.deliveryLocation = messageSecurityStateParameterValue?.deliveryLocation ;
        this.directionality = messageSecurityStateParameterValue?.directionality ;
        this.internetMessageId = messageSecurityStateParameterValue?.internetMessageId ;
        this.messageFingerprint = messageSecurityStateParameterValue?.messageFingerprint ;
        this.messageReceivedDateTime = messageSecurityStateParameterValue?.messageReceivedDateTime ;
        this.messageSubject = messageSecurityStateParameterValue?.messageSubject ;
        this.networkMessageId = messageSecurityStateParameterValue?.networkMessageId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "connectingIP": n => { this.connectingIP = n.getStringValue(); },
            "deliveryAction": n => { this.deliveryAction = n.getStringValue(); },
            "deliveryLocation": n => { this.deliveryLocation = n.getStringValue(); },
            "directionality": n => { this.directionality = n.getStringValue(); },
            "internetMessageId": n => { this.internetMessageId = n.getStringValue(); },
            "messageFingerprint": n => { this.messageFingerprint = n.getStringValue(); },
            "messageReceivedDateTime": n => { this.messageReceivedDateTime = n.getDateValue(); },
            "messageSubject": n => { this.messageSubject = n.getStringValue(); },
            "networkMessageId": n => { this.networkMessageId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.connectingIP){
        if(this.connectingIP)
        writer.writeStringValue("connectingIP", this.connectingIP);
        }
        if(this.deliveryAction){
        if(this.deliveryAction)
        writer.writeStringValue("deliveryAction", this.deliveryAction);
        }
        if(this.deliveryLocation){
        if(this.deliveryLocation)
        writer.writeStringValue("deliveryLocation", this.deliveryLocation);
        }
        if(this.directionality){
        if(this.directionality)
        writer.writeStringValue("directionality", this.directionality);
        }
        if(this.internetMessageId){
        if(this.internetMessageId)
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        }
        if(this.messageFingerprint){
        if(this.messageFingerprint)
        writer.writeStringValue("messageFingerprint", this.messageFingerprint);
        }
        if(this.messageReceivedDateTime){
        if(this.messageReceivedDateTime)
        writer.writeDateValue("messageReceivedDateTime", this.messageReceivedDateTime);
        }
        if(this.messageSubject){
        if(this.messageSubject)
        writer.writeStringValue("messageSubject", this.messageSubject);
        }
        if(this.networkMessageId){
        if(this.networkMessageId)
        writer.writeStringValue("networkMessageId", this.networkMessageId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
