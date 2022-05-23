import {createServiceAnnouncementAttachmentFromDiscriminatorValue} from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import {ServiceAnnouncementAttachmentImpl} from './index';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceAnnouncementAttachmentCollectionResponse} from './serviceAnnouncementAttachmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceAnnouncementAttachmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, ServiceAnnouncementAttachmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ServiceAnnouncementAttachment[] | undefined;
    /**
     * Instantiates a new ServiceAnnouncementAttachmentCollectionResponse and sets the default values.
     * @param serviceAnnouncementAttachmentCollectionResponseParameterValue 
     */
    public constructor(serviceAnnouncementAttachmentCollectionResponseParameterValue?: ServiceAnnouncementAttachmentCollectionResponse | undefined) {
        this.additionalData = serviceAnnouncementAttachmentCollectionResponseParameterValue?.additionalData ? serviceAnnouncementAttachmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = serviceAnnouncementAttachmentCollectionResponseParameterValue?.nextLink ;
        this.value = serviceAnnouncementAttachmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ServiceAnnouncementAttachmentImpl>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ServiceAnnouncementAttachmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ServiceAnnouncementAttachmentImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
