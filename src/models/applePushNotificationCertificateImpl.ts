import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Apple push notification certificate. */
export class ApplePushNotificationCertificateImpl extends EntityImpl implements ApplePushNotificationCertificate, Parsable {
    /** Apple Id of the account used to create the MDM push certificate. */
    public appleIdentifier?: string | undefined;
    /** Not yet documented */
    public certificate?: string | undefined;
    /** Certificate serial number. This property is read-only. */
    public certificateSerialNumber?: string | undefined;
    /** The expiration date and time for Apple push notification certificate. */
    public expirationDateTime?: Date | undefined;
    /** Last modified date and time for Apple push notification certificate. */
    public lastModifiedDateTime?: Date | undefined;
    /** Topic Id. */
    public topicIdentifier?: string | undefined;
    /**
     * Instantiates a new applePushNotificationCertificate and sets the default values.
     * @param applePushNotificationCertificateParameterValue 
     */
    public constructor(applePushNotificationCertificateParameterValue?: ApplePushNotificationCertificate | undefined) {
        super();
        this.appleIdentifier = applePushNotificationCertificateParameterValue?.appleIdentifier ;
        this.certificate = applePushNotificationCertificateParameterValue?.certificate ;
        this.certificateSerialNumber = applePushNotificationCertificateParameterValue?.certificateSerialNumber ;
        this.expirationDateTime = applePushNotificationCertificateParameterValue?.expirationDateTime ;
        this.lastModifiedDateTime = applePushNotificationCertificateParameterValue?.lastModifiedDateTime ;
        this.topicIdentifier = applePushNotificationCertificateParameterValue?.topicIdentifier ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appleIdentifier": n => { this.appleIdentifier = n.getStringValue(); },
            "certificate": n => { this.certificate = n.getStringValue(); },
            "certificateSerialNumber": n => { this.certificateSerialNumber = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "topicIdentifier": n => { this.topicIdentifier = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appleIdentifier){
        writer.writeStringValue("appleIdentifier", this.appleIdentifier);
        }
        if(this.certificate){
        writer.writeStringValue("certificate", this.certificate);
        }
        if(this.certificateSerialNumber){
        writer.writeStringValue("certificateSerialNumber", this.certificateSerialNumber);
        }
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.topicIdentifier){
        writer.writeStringValue("topicIdentifier", this.topicIdentifier);
        }
    };
}
