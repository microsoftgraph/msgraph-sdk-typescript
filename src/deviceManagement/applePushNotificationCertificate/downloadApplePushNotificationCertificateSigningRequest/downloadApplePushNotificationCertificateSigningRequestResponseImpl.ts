import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './downloadApplePushNotificationCertificateSigningRequestResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the downloadApplePushNotificationCertificateSigningRequest method. */
export class DownloadApplePushNotificationCertificateSigningRequestResponseImpl implements AdditionalDataHolder, DownloadApplePushNotificationCertificateSigningRequestResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: string | undefined;
    /**
     * Instantiates a new downloadApplePushNotificationCertificateSigningRequestResponse and sets the default values.
     * @param downloadApplePushNotificationCertificateSigningRequestResponseParameterValue 
     */
    public constructor(downloadApplePushNotificationCertificateSigningRequestResponseParameterValue?: DownloadApplePushNotificationCertificateSigningRequestResponse | undefined) {
        this.additionalData = downloadApplePushNotificationCertificateSigningRequestResponseParameterValue?.additionalData ? downloadApplePushNotificationCertificateSigningRequestResponseParameterValue?.additionalData! : {}
        this.value = downloadApplePushNotificationCertificateSigningRequestResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
