import {MessageSecurityState} from './messageSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageSecurityStateImpl implements AdditionalDataHolder, MessageSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The connectingIP property */
    public connectingIP?: string | undefined;
    /** The deliveryAction property */
    public deliveryAction?: string | undefined;
    /** The deliveryLocation property */
    public deliveryLocation?: string | undefined;
    /** The directionality property */
    public directionality?: string | undefined;
    /** The internetMessageId property */
    public internetMessageId?: string | undefined;
    /** The messageFingerprint property */
    public messageFingerprint?: string | undefined;
    /** The messageReceivedDateTime property */
    public messageReceivedDateTime?: Date | undefined;
    /** The messageSubject property */
    public messageSubject?: string | undefined;
    /** The networkMessageId property */
    public networkMessageId?: string | undefined;
    /**
     * Instantiates a new messageSecurityState and sets the default values.
     * @param messageSecurityStateParameterValue 
     */
    public constructor(messageSecurityStateParameterValue?: MessageSecurityState | undefined) {
        this.additionalData = messageSecurityStateParameterValue?.additionalData ? messageSecurityStateParameterValue?.additionalData! : {}
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
        writer.writeStringValue("connectingIP", this.connectingIP);
        }
        if(this.deliveryAction){
        writer.writeStringValue("deliveryAction", this.deliveryAction);
        }
        if(this.deliveryLocation){
        writer.writeStringValue("deliveryLocation", this.deliveryLocation);
        }
        if(this.directionality){
        writer.writeStringValue("directionality", this.directionality);
        }
        if(this.internetMessageId){
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        }
        if(this.messageFingerprint){
        writer.writeStringValue("messageFingerprint", this.messageFingerprint);
        }
        if(this.messageReceivedDateTime){
        writer.writeDateValue("messageReceivedDateTime", this.messageReceivedDateTime);
        }
        if(this.messageSubject){
        writer.writeStringValue("messageSubject", this.messageSubject);
        }
        if(this.networkMessageId){
        writer.writeStringValue("networkMessageId", this.networkMessageId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
